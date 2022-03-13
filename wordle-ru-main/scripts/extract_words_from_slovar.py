from pathlib import Path
import sys
import re
import json


def is_plural(definition):
    """
    checks definition to see if word is plural.
    if so - changes to singular
    """
    regex = re.compile('^[ \-а-яёй.,]+ (ед.)')
    singular = regex.findall(definition)
    return len(singular) != 0


def is_noun(definition):
    regex = re.compile('^[ \-а-яёй.,]+ ([м.]|[ж.]|[ср.])')
    found_noun = regex.findall(definition)
    return len(found_noun) != 0


def parse_slovar(text, n=None):
    regex = re.compile('^([А-ЯЁЙ]+),(.+)')
    lines = text.split('\n\n')

    slovar = {}
    for line in lines:
        matches = regex.findall(line)
        if len(matches) != 0:
            word, definition = regex.findall(line)[0]

            # only collect words of a given length
            if n is not None and len(word) != n:
                continue

            # only get singular words
            if is_plural(definition):
                continue

            # only get nouns
            if not is_noun(definition):
                continue

            slovar[word] = definition

    return slovar


def save_words_n_letters(file_path, n):
    with open(file_path, 'r') as f:
        words = f.readlines()

    words = [w for w in words if len(w.strip()) == int(n)]

    new_file_name = f'words_{n}_letters.txt'
    with open(file_path.parent / new_file_name, 'w') as f:
        f.writelines(words)


def main(file_path, n):
    n = int(n)
    file_path = Path(file_path)

    with open(file_path, 'r') as f:
        text = f.read()

    slovar = parse_slovar(text, n)

    new_file_name = f'slovar_{n}_letters_nouns_singular.json'
    with open(file_path.parent / new_file_name, 'w') as f:
        json.dump(slovar, f, ensure_ascii=False)

    exit(0)


if __name__ == '__main__':
    try:
        params = sys.argv[1], sys.argv[2]
    except IndexError:
        raise Exception('2 parameters are required: filepath and number of letters')

    main(*params)


