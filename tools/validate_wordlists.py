#!/usr/bin/env python3
"""Validate the WordleAZ word lists.  Read-only: changes nothing.

Run it before every release / every commit that touches the word base:

    python tools/validate_wordlists.py

It checks that

  1. ``wordbase/main_words.txt``      matches the ``options`` array in main.js;
  2. ``wordbase/examination_words.txt`` matches the ``updatedSet`` array;
  3. every word is exactly 5 letters long and uses only the 32 letters of the
     Azerbaijani keyboard alphabet (this is the check that would have caught
     the ``dəng:`` entry, which made one day impossible to win);
  4. there are no duplicates, uppercase letters or non-letter characters;
  5. the keyboard alphabet in ``main.js`` matches the one in tools/wordlists.py;
  6. every daily answer is actually typeable by a player;
  7. the daily rotation still covers every answer exactly once per cycle.

Exit code is 0 when everything is fine and 1 when a problem was found, so the
script can be wired into CI or a pre-commit hook.
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from wordlists import (  # noqa: E402  (import after sys.path tweak on purpose)
    AZERBAIJANI_ALPHABET,
    EPOCH_NOTE,
    GUESSES_ARRAY,
    GUESSES_FILE,
    MAIN_JS,
    SOLUTIONS_ARRAY,
    SOLUTIONS_FILE,
    extract_js_array,
    read_choices_alphabet,
    read_word_file,
    validate_alphabet,
    validate_words,
)

#: Multiplicative step used by ``isDate()`` in main.js:
#: ``answerIndex = (dayOffset * DAILY_STEP) % options.length``.
DAILY_STEP = 26641


def section(title: str) -> None:
    print()
    print("=" * 74)
    print(title)
    print("=" * 74)


def main() -> int:
    problems: list[str] = []

    main_js = MAIN_JS.read_text(encoding="utf-8")

    section("1. LOADING")
    file_solutions = read_word_file(SOLUTIONS_FILE)
    file_guesses = read_word_file(GUESSES_FILE)
    code_solutions = extract_js_array(main_js, SOLUTIONS_ARRAY).words
    code_guesses = extract_js_array(main_js, GUESSES_ARRAY).words
    alphabet = read_choices_alphabet(main_js)
    print(f"  {SOLUTIONS_FILE.name:<24} {len(file_solutions):>6} words")
    print(f"  {GUESSES_FILE.name:<24} {len(file_guesses):>6} words")
    print(f"  {SOLUTIONS_ARRAY} in main.js      {len(code_solutions):>6} words")
    print(f"  {GUESSES_ARRAY} in main.js        {len(code_guesses):>6} words")
    print(f"  keyboard alphabet        {len(alphabet):>6} letters")

    section("2. WORD RULES")
    for label, words in (
        ("main_words.txt", file_solutions),
        ("examination_words.txt", file_guesses),
    ):
        found = validate_words(words, label)
        problems.extend(found)
        if found:
            print(f"  [FAIL] {label}: {len(found)} problem(s)")
            for item in found[:20]:
                print(f"         - {item}")
            if len(found) > 20:
                print(f"         ... and {len(found) - 20} more")
        else:
            print(f"  [ OK ] {label}: all {len(words)} words are valid")

    section("3. ALPHABET CONSISTENCY")
    found = validate_alphabet(main_js)
    problems.extend(found)
    if found:
        for item in found:
            print(f"  [FAIL] {item}")
    else:
        print(f"  [ OK ] main.js and the tooling agree on all "
              f"{len(AZERBAIJANI_ALPHABET)} letters")

    section("4. SOURCE OF TRUTH, SHIPPED BUNDLE AND CROSS-LIST CHECKS")
    for label, words_from_file, words_in_code in (
        ("main_words.txt -> options", file_solutions, code_solutions),
        ("examination_words.txt -> updatedSet", file_guesses, code_guesses),
    ):
        if words_from_file == words_in_code:
            print(f"  [ OK ] {label}: identical, order included")
        elif sorted(words_from_file) == sorted(words_in_code):
            print(f"  [FAIL] {label}: same words but DIFFERENT ORDER - run "
                  f"`python tools/build_wordlists.py`")
            problems.append(f"{label}: order differs")
        else:
            only_file = sorted(set(words_from_file) - set(words_in_code))
            only_code = sorted(set(words_in_code) - set(words_from_file))
            print(f"  [FAIL] {label}: out of sync")
            print(f"         only in the .txt file : {only_file[:12]}")
            print(f"         only in main.js       : {only_code[:12]}")
            problems.append(f"{label}: content differs")

    # The game accepts a guess when it is found in either list, so an entry
    # living in both lists is harmless - but it normally means somebody moved a
    # word between the lists and forgot to delete the old copy.
    overlap = sorted(set(file_solutions) & set(file_guesses))
    if overlap:
        print(f"  [WARN] {len(overlap)} word(s) are in BOTH lists: {overlap[:10]}")
    else:
        print("  [ OK ] the daily answers and the extra guesses are disjoint")

    section("5. DAILY ROTATION")
    total = len(code_solutions)
    step_coprime = math.gcd(DAILY_STEP, total) == 1
    if total and step_coprime:
        print(f"  [ OK ] gcd({DAILY_STEP}, {total}) = 1, so the cycle visits "
              f"all {total} answers")
    else:
        print(f"  [FAIL] gcd({DAILY_STEP}, {total}) != 1 - some answers would "
              f"never be used and others would repeat early")
        problems.append("daily rotation does not cover every answer")

    section("6. ANNOUNCEMENT")
    if problems:
        print(f"  {len(problems)} problem(s) found.  Fix the files in "
              f"'wordbase/' and re-run.")
        print("  Do NOT hand-edit the arrays in main.js - run "
              "`python tools/build_wordlists.py` instead.")
        return 1

    print("  All checks passed.")
    print()
    print("  Note: the daily answer order must never change casually.  Removing")
    print("  or inserting an entry in main_words.txt shifts every future")
    print("  puzzle, so players would see a word they have already played.")
    print(f"  {EPOCH_NOTE}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
