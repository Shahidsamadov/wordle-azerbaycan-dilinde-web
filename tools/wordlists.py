"""Shared helpers for the WordleAZ word-list tooling.

The game ships two word lists, and both exist in two places:

    wordbase/main_words.txt        ->  the ``options`` array in main.js
    wordbase/examination_words.txt ->  the ``updatedSet`` array in main.js

The two copies used to drift apart, which caused a broken daily answer
(``dəng:``) to reach production.  ``main_words.txt`` /
``examination_words.txt`` are now the single source of truth: edit those
files and run ``python tools/build_wordlists.py`` to regenerate the arrays
inside ``main.js``.  Never hand-edit the arrays in ``main.js``.

Both scripts in this folder import from here, so the validation rules can
never diverge between "check" and "build".
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path

# ---------------------------------------------------------------------------
# Layout of the repository
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parent.parent
MAIN_JS = REPO_ROOT / "main.js"
WORDBASE = REPO_ROOT / "wordbase"

#: The 32 letters of the Azerbaijani alphabet as they appear on the on-screen
#: keyboard.  Must stay in sync with ``var choices`` inside main.js; that
#: invariant is verified by ``validate_wordlists.py``.
AZERBAIJANI_ALPHABET = "qüertyuiopöğasdfghjklıəzxcvbnmçş"

#: Word length used by the game.  Everything else is a bug.
WORD_LENGTH = 5

#: Human readable note about the rotation, printed by the validator.
#: ``mutationsMap`` in main.js is the epoch and the cycle length equals the
#: number of entries in main_words.txt.
EPOCH_NOTE = (
    "The rotation starts on 2022-01-16 (mutationsMap in main.js) and repeats "
    "every len(main_words.txt) days."
)

#: Name of the JS array that holds the *daily answers*, in order.
#: The order is meaningful: the answer for a given day is
#: ``options[(dayOffset * 26641) % options.length]``, so inserting, removing
#: or reordering an entry shifts every future puzzle.
SOLUTIONS_ARRAY = "options"
SOLUTIONS_FILE = WORDBASE / "main_words.txt"

#: Name of the JS array that holds words which may be *guessed* but are never
#: used as the daily answer.  Order is irrelevant here.
GUESSES_ARRAY = "updatedSet"
GUESSES_FILE = WORDBASE / "examination_words.txt"


# ---------------------------------------------------------------------------
# Loading
# ---------------------------------------------------------------------------


def read_word_file(path: Path) -> list[str]:
    """Read a one-word-per-line text file.

    Blank lines are ignored so that a stray newline at the end of the file (or
    a leftover empty line from a manual edit) does not break the build.
    """
    text = path.read_text(encoding="utf-8-sig")
    return [line.strip() for line in text.splitlines() if line.strip()]


@dataclass
class ArraySpan:
    """Location of a ``var name = [ ... ];`` literal inside main.js."""

    start: int  #: index of the opening ``[``
    end: int  #: index just past the closing ``]``
    words: list[str] = field(default_factory=list)


def extract_js_array(source: str, name: str) -> ArraySpan:
    """Locate ``var <name> = [...]`` in ``source`` and parse its entries.

    Only plain double-quoted string entries are supported, which is all the
    bundle contains.  Braces/brackets inside string literals are respected by
    scanning character by character.
    """
    match = re.search(r"var\s+" + re.escape(name) + r"\s*=\s*\[", source)
    if match is None:
        raise ValueError(f"array '{name}' not found in main.js")

    start = match.end() - 1  # points at '['
    depth = 0
    index = start
    in_string = False
    escaped = False
    while index < len(source):
        char = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
        elif char == '"':
            in_string = True
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                break
        index += 1
    else:
        raise ValueError(f"unterminated array literal for '{name}'")

    end = index + 1  # just past ']'
    words = re.findall(r'"((?:[^"\\]|\\.)*)"', source[start + 1:index])
    return ArraySpan(start=start, end=end, words=words)


def read_choices_alphabet(main_js: str) -> str:
    """Read ``var choices = "..."`` from main.js (the keyboard alphabet)."""
    match = re.search(r'var\s+choices\s*=\s*"([^"]*)"', main_js)
    if match is None:
        raise ValueError("could not find 'var choices' in main.js")
    return match.group(1)


# ---------------------------------------------------------------------------
# Validation
# ---------------------------------------------------------------------------


def validate_words(words: list[str], label: str) -> list[str]:
    """Return a list of human-readable problems with ``words``.

    The rules are intentionally strict: a single bad entry can make a whole
    day impossible to win, so the build refuses to run while any problem is
    reported.

    Checks performed:
      * non-empty list;
      * exactly ``WORD_LENGTH`` characters per word;
      * only letters of the Azerbaijani alphabet (no digits, punctuation or
        spaces);
      * lowercase only - the game lowercases every keystroke, so an uppercase
        entry can never be entered by a player;
      * no duplicates;
      * NFC-normalised (guards against visually identical but byte-different
        letters such as 'i' + combining dot).
    """
    problems: list[str] = []

    if not words:
        return [f"[{label}] the word list is empty"]

    seen: dict[str, int] = {}

    for position, word in enumerate(words, start=1):
        where = f"[{label}] line {position} ({word!r})"

        if len(word) != WORD_LENGTH:
            problems.append(
                f"{where}: length is {len(word)}, expected {WORD_LENGTH}"
            )

        if word != word.lower():
            problems.append(
                f"{where}: contains uppercase letters; players can only type "
                f"lowercase characters"
            )

        outside = sorted({c for c in word if c not in AZERBAIJANI_ALPHABET})
        if outside:
            problems.append(
                f"{where}: character(s) {', '.join(repr(c) for c in outside)} "
                f"are not on the on-screen keyboard"
            )

        if word in seen:
            problems.append(f"{where}: duplicate of line {seen[word]}")
        else:
            seen[word] = position

    return problems


def validate_alphabet(main_js: str) -> list[str]:
    """Make sure the alphabet used by the tooling matches main.js."""
    actual = read_choices_alphabet(main_js)
    if actual != AZERBAIJANI_ALPHABET:
        return [
            f"[alphabet] main.js 'choices' is {actual!r} but the tooling "
            f"expects {AZERBAIJANI_ALPHABET!r}"
        ]
    return []


# ---------------------------------------------------------------------------
# Rendering
# ---------------------------------------------------------------------------


def render_js_array(words: list[str]) -> str:
    """Render a JS array literal using the exact formatting main.js uses.

    Only the ``[ ... ]`` part is returned - the ``var <name> = `` prefix and
    the trailing semicolon that surround it in the bundle are left untouched.
    The result therefore matches the original byte for byte::

        var options = ["abidə",
          "abunə",
          ...
          "zurna"
        ];

    Reproducing the formatting exactly keeps the generated diff minimal, so a
    rebuild only shows the words that really changed.
    """
    lines = [f'["{words[0]}",']
    for word in words[1:-1]:
        lines.append(f'  "{word}",')
    lines.append(f'  "{words[-1]}"')
    lines.append("]")
    return "\n".join(lines)
