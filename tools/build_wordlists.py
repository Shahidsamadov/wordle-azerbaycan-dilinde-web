#!/usr/bin/env python3
"""Regenerate the word arrays inside main.js from wordbase/*.txt.

    python tools/build_wordlists.py           # rewrite main.js
    python tools/build_wordlists.py --check   # only report, never write

Why this script exists
----------------------
The word lists used to be maintained twice: in the .txt files *and* hand-edited
inside the 190 kB main.js bundle.  The two copies silently drifted apart, and a
typo (``dəng:``) ended up in the list of daily answers, which made that day
impossible to win.  From now on:

    wordbase/main_words.txt        is the single source of truth for `options`
    wordbase/examination_words.txt is the single source of truth for `updatedSet`

Edit those two files, then run this script.  It refuses to touch main.js while
any validation problem exists, so a bad word can no longer reach production.

Important
---------
``options`` is an ordered list and the answer for a day is
``options[(dayOffset * 26641) % options.length]``.  Therefore:

  * fixing a word in place is safe;
  * inserting or removing an entry is NOT: it shifts every future puzzle.
    The script warns loudly when the length changes.
"""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from wordlists import (  # noqa: E402  (import after sys.path tweak on purpose)
    GUESSES_ARRAY,
    GUESSES_FILE,
    MAIN_JS,
    SOLUTIONS_ARRAY,
    SOLUTIONS_FILE,
    extract_js_array,
    read_word_file,
    render_js_array,
    validate_alphabet,
    validate_words,
)


def main(argv: list[str]) -> int:
    check_only = "--check" in argv

    source = MAIN_JS.read_text(encoding="utf-8")

    # ---------------------------------------------------------------- inputs
    solutions = read_word_file(SOLUTIONS_FILE)
    guesses = read_word_file(GUESSES_FILE)

    # ------------------------------------------------------------ validation
    problems = validate_alphabet(source)
    problems += validate_words(solutions, SOLUTIONS_FILE.name)
    problems += validate_words(guesses, GUESSES_FILE.name)

    if problems:
        print(f"Refusing to build: {len(problems)} validation problem(s).")
        for problem in problems[:25]:
            print(f"  - {problem}")
        if len(problems) > 25:
            print(f"  ... and {len(problems) - 25} more")
        print("\nRun `python tools/validate_wordlists.py` for the full report.")
        return 1

    # ------------------------------------------------------- rotation guard
    current = extract_js_array(source, SOLUTIONS_ARRAY).words
    if len(current) != len(solutions):
        print("WARNING: the number of daily answers is changing "
              f"({len(current)} -> {len(solutions)}).")
        print("         The answer for every future day will shift, so players")
        print("         may see a word they have already played.  Only do this")
        print("         on purpose, and prefer fixing a word in place.")
        print()

    # ---------------------------------------------------------------- render
    # Replace from the end of the file backwards so that the offsets of the
    # earlier array stay valid while we patch the later one.
    replacements = []
    for name, words in ((GUESSES_ARRAY, guesses), (SOLUTIONS_ARRAY, solutions)):
        span = extract_js_array(source, name)
        replacements.append((span.start, span.end, render_js_array(words)))

    updated = source
    for start, end, literal in sorted(replacements, key=lambda item: -item[0]):
        updated = updated[:start] + literal + updated[end:]

    if updated == source:
        print("main.js is already up to date - nothing to do.")
        return 0

    if check_only:
        print("main.js is OUT OF SYNC with wordbase/*.txt.")
        print("Run `python tools/build_wordlists.py` to regenerate it.")
        return 1

    MAIN_JS.write_text(updated, encoding="utf-8", newline="\n")
    print(f"Updated {MAIN_JS}")
    print(f"  {SOLUTIONS_ARRAY:<12} {len(solutions):>6} words "
          f"(from {SOLUTIONS_FILE.name})")
    print(f"  {GUESSES_ARRAY:<12} {len(guesses):>6} words "
          f"(from {GUESSES_FILE.name})")
    print("\nNext: run `python tools/validate_wordlists.py` and test the game.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
