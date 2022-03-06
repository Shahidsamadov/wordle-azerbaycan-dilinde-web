import nimib, std / [strformat, sequtils, strutils, sugar, setutils, sets, algorithm, random]

# todo: set Italian language in Nimib
nbInit

# filenames block is moved to a later point in the document
nbCode:
  const
    folderDict = "dict/"
    filenameSmallSource = folderDict & "60_000_parole.txt"
    filenameBigSource = folderDict & "dictionary.txt"
    filenameCurated = folderDict & "curated.txt"
    filenameWordList = folderDict & "word_list.txt"
    filenameParole = folderDict & "parole.txt"
    filenameSmall5 = folderDict & "small5.txt"
    filenameBig5 = folderDict & "big5.txt"
    filenameHotel = folderDict & "hotels.txt"
    filenameAddToWordList = folderDict & "word_list_add.txt"
    filenameRemoveFromWordList = folderDict & "word_list_remove.txt"
    filenameFixed = folderDict & "fixed.txt"
    filenameParolette = folderDict & "parolette.txt"
    filenameParoletteIdeas = folderDict & "parolette_ideas.txt"
    filenameItLines = folderDict & "itLines.js"
    filenameReactleValidGuesses = folderDict & "validGuesses.ts"
    filenameReactleParole = folderDict & "wordlist.ts"
    linkParolette = "[parolette](https://parolette.netlify.app)"

let blockFilename = nb.blocks.pop

nbText: &""" # Dizionario di Par🇮🇹le

Il dizionario di Par🇮🇹le (o Parle) è basato su dizionari disponibili pubblicamente.

- un dizionario "piccolo" di circa 60_000 parole (`{filenameSmallSource}`)
  preso da [napolux/paroleitaliane](https://github.com/napolux/paroleitaliane)
- un dizionario "grande" di più di 4 milioni di parole (`{filenameBigSource}`)
  preso da [sigmasaur/AnagramSolver](https://github.com/sigmasaur/AnagramSolver)

Inoltre il dizionario usato da {linkParolette} è stato usato come fonte di ulteriore
idee da aggiungere.

Questo documento spiega ed implementa il processo di generazione dei dizionari usati da Parle.

I due dizionari sorgente sono usati per generare i dizionari usati dal gioco, ovvero:
  - `{filenameCurated}`: dizionario che contiene in ordine alfabetico tutte le parole di 5 lettere che sono
    usate come parole da indovinare
  - `{filenameWordList}`: dizionario che contiene in ordine alfabetico tutte le parole di 5 lettere che possono
    essere usate come tentativi (contiene anche le parole in `{filenameCurated}`)
  - `{filenameParole}`: dizionario che contiene l'ordine esatto delle parole da indovinare a partire dalla prima
    data del gioco (contiene tutte e sole le parole di `{filenameCurated}` in ordine sparso)

Il processo di generazione prevede i seguenti passi:

1. estrarre le parole di 5 lettere dai dizionari piccolo e grande, limitandosi
   alle parole che finiscono in una vocale, tranne la u
   (il dizionario piccolo contiene radici di lemmi come _ripar_ o simili).
   Il risultato (in ordine alfabetico) è salvato in `{filenameSmall5}` e `{filenameBig5}`.
   Estrarre dai dizionari le parole di 5 lettere che finiscono in consonante o in u (e.g. hotel, ...)
   e salvarle in `{filenameHotel}`
2. il dizionario `{filenameCurated}` è costruito manualmente a partire dai dizionari fin qui generati.
   contestualmente sono creati manualmente due dizionari `{filenameAddToWordList}`
   e `{filenameRemoveFromWordList}` che serviranno
   per generare il dizionario `{filenameWordList}`.
3. Il dizionario `{filenameParole}` è generato dalle parole in `{filenameCurated}`
   con una generazione casuale
   (tenendo conto di un dizionario `{filenameItLines}` di parole fisse iniziali usato per gestire i cambi di dizionario)
4. Infine viene generato il file `{filenameItLines}` con le linee di codice da usare nel codice affinché usi
   le liste di `{filenameParole}` e `{filenameWordList}` generate fino a qui.

## Storia del processo di generazione del dizionario

Il processo è cambiato nel tempo:
  - il dizionario piccolo è in uso dal 3 gennaio 2022 (giorno di nascita di Parle)
  - il dizionario grande è in uso dal 4 gennaio 2022
  - a partire dal 13 febbraio la numerazione delle parole è fatta a partire dal 3 gennaio
    (precedentemente la numerazione era fatta a partire dal 1 febbraio 2021,
    data scelta un po' per caso ed un po' per sbaglio)
  - a partire dal 14 febbraio le parole da indovinare sono "curate", ovvero è stato fatto un processo di selezione
    (precedentemente erano selezionate in modo casuale a partire dal dizionario piccolo)

Il resto del documento (in inglese) contiene il codice che implementa il processo e può contenere qualche lieve spoiler.

# Implementation

## 0. Filenames

All filenames used
"""
nb.blocks.add blockFilename
nbText: """
## 1. Extract 5 letter words from source dictionaries
"""
nbCode:
  type FilterFileStats = tuple[sourceLines, destLines: int]

  proc filterFile(source, dest: string, condition: string -> bool): FilterFileStats =
    ## filter lines in source file according to condition and write valid lines in destination
    ## outputs line count of source and destination file    
    var outLines : seq[string]
    for line in source.lines:
      inc result.sourceLines
      if condition(line):
        inc result.destLines
        outLines.add line
    writeFile(dest): outLines.join("\n")

# first time I am using toSet from std / setutils (did not know that module existed)
nbCode:
  const
    alphabet = toSet("abcdefghijklmnopqrstuvwxyz")
    commonEndings = toSet("aeio")
    otherEndings = alphabet - commonEndings

  template letterOk(word: string, i: int): bool =
    word[i] in alphabet

  template lettersOk(word: string): bool =
    letterOk(word, 1) and letterOk(word, 2) and letterOk(word, 3) and letterOk(word, 4)

  # should be faster using the template lettersOk than using toSet(word) <= alphabet, right?
  func buonaCond(word: string): bool =
    len(word) == 5 and lettersOk(word) and word[^1] in commonEndings

  func hotelCond(word: string): bool =
    len(word) == 5 and lettersOk(word) and word[^1] in otherEndings

  echo filterFile(filenameSmallSource, filenameSmall5, buonaCond)
  echo filterFile(filenameBigSource, filenameBig5, buonaCond)

  echo filterFile(filenameBigSource, filenameHotel, hotelCond)

nbText: """ ## 2. Checks on manual dicts and generate word list

"""
nbCode:
  template make(ident: untyped) {. dirty .} =
    let
      ident = lines(`filename ident`).toSeq
      `ident Set` = ident.toHashSet
    echo `filename ident`, ": ", len(ident)
    assert len(ident) == len(`ident Set`) # checks there are no doubles

  template checkIsSorted(ident: untyped) =
    var isSorted = true
    for i in 0 ..< ident.high:
      if cmp(ident[i], ident[i+1]) > 0:
        echo ident[i], " > ", ident[i+1]
        isSorted = false
    if isSorted:
      echo `filename ident`, " is sorted"
    else:
      echo "[ERROR]", `filename ident`, " is NOT sorted"

  template checkContained(identA, identB: untyped) =
    var isContained = true
    for elem in `identA Set`:
      if elem not_in `identB Set`:
        echo elem, " not in ", `filename identB`
        isContained = false
    if isContained:
      echo `filename identA`, " is contained in ", `filename identB`
    else:
      echo "[ERROR]", `filename identA`, " is NOT contained in ", `filename identB`

  make small5
  checkIsSorted small5
  make big5
  checkIsSorted big5
  make hotel
  checkIsSorted hotel

  make curated
  checkIsSorted curated
  make fixed

  checkContained fixed, curated
  # checkContained small5, big5 # not expected to happen (and it does not happen)

  make addToWordList
  make removeFromWordList
  checkContained removeFromWordList, big5

nbText: &"""dictionary from italian version of wordle {linkParolette}
is used to generated more ideas that have been incorporated in the curated dictionary (or in word list)."""

nbCode:
  make parolette
  let wordIdeas = sorted(toSeq(paroletteSet - curatedSet - big5Set))
  dump len(wordIdeas)
  writeFile(filenameParoletteIdeas, wordIdeas.join("\n"))  

nbText: """Generation of final word list"""

nbCode:
  let
    wordListSet = curatedSet + big5Set + addToWordListSet - removeFromWordListSet
    wordList = sorted(toSeq(wordListSet))
  dump len(wordList)
  checkContained curated, wordList # almost obvious
  writeFile(filenameWordList, wordList.join("\n"))  

nbText: """## 3. Generate list of solution words """

nbCode:
  var paroleFuture = toSeq(curatedSet - fixedSet)
  randomize(880222+190509+810713)
  shuffle(paroleFuture)
  let
    parole = fixed & paroleFuture
  writeFile(filenameParole, parole.join("\n"))
  assert len(parole) == len(curated)

nbText: """## 4. Generate itLines.js"""

nbCode:
  let
    paroleForJs = parole.mapIt(&"\"{it}\"").join(", ")
    wordListForJs = (wordListSet - curatedSet).toSeq.sorted.mapIt(&"\"{it}\"").join(", ")
  writeFile(filenameItLines): &"""
  var Aa = [{paroleForJs}],
      La = [{wordListForJs}],
"""

nbText: """## 5. Generate files for Reactle"""

nbCode:
  let
    reactleValidGuesses = wordList.mapIt(&"  '{it}',").join("\n")
    reactleParole = parole.mapIt(&"  '{it}',").join("\n")
  writeFile(filenameReactleValidGuesses): &"""export const VALID_GUESSES = [
{reactleValidGuesses}
]
"""
  writeFile(filenameReactleParole): &"""export const WORDS = [
{reactleParole}
]
"""

nbText: """# Nim(ib) notes

These notes may be of interest to you only if you know what Nim and Nimib are
(language and library used to generate this document).

* imports are not shown (see Show Source below)
* const filenames used in initial paragraph but shown later
"""
nbSave