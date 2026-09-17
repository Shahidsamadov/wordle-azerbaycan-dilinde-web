# NOTICE

This project is an **unofficial, non-commercial fan adaptation** of Wordle for
the Azerbaijani language. It is not affiliated with, endorsed by, or sponsored
by The New York Times Company or by Josh Wardle.

---

## 1. "Wordle" is a trademark

The name **Wordle**, its logo and its visual identity belong to
**The New York Times Company**. They are used here only to describe what this
project is — an Azerbaijani version of that game — and no ownership is claimed.

If you fork this project, do not present it as an official Wordle product.

## 2. The game engine is derived from the original Wordle client

`main.js` is a single pre-compiled bundle that was produced by transpiling and
bundling the client code of the original Wordle game, created by **Josh Wardle**
and now owned by The New York Times.

Evidence of that origin is visible throughout the file — the custom-element
names and state fields are the original ones, for example `game-app`,
`game-tile`, `game-row`, `game-keyboard`, `game-modal`, `game-stats`,
`game-switch`, `game-theme-manager`, `countdown-timer`, `boardState`,
`evaluations`, `hardMode`, `winPercentage`, `averageGuesses`, `dayOffset`,
`statistics`, `darkTheme`, `colorBlindTheme`.

**Wordle was never released under an open-source license.** Therefore:

- the author of this repository is **not** the copyright holder of that engine
  and cannot license it;
- the MIT license in `LICENSE` deliberately excludes it;
- the engine is included here only because the adaptation does not work without
  it, and because the original project has been tolerated as a fan work;
- if you reuse this repository, you are responsible for your own assessment of
  the position regarding that code.

## 3. The word base

`wordbase/*.txt` is a compilation of Azerbaijani five-letter words assembled by
the author of this repository from several dictionaries. It is licensed under
**CC BY 4.0** — see `wordbase/LICENSE` for the attribution terms.

The individual source dictionaries are third-party material whose exact
editions and licenses were not recorded during compilation. The CC BY 4.0
license covers the compilation, not the underlying dictionaries. See
`wordbase/LICENSE` for details and for how to request removal of an entry.

## 4. Other third-party material

| Item | Origin / license |
| --- | --- |
| Clear Sans font family | Referenced in the CSS as `'Clear Sans'`. The font files are **not** included in this repository; they were removed from the git history on 2026-09-17. Clear Sans is distributed by Intel under the Apache License 2.0. |
| `assets/20220321_132752_Example.png` | Screenshot of this project, used by the README. |
| Google Analytics (gtag.js) | Loaded from `googletagmanager.com`, subject to Google's terms. Loaded with Consent Mode v2 and only after the visitor agrees — see the privacy section of the README. |

The git history also used to contain code and dictionaries from unrelated
projects (an Italian Wordle implementation, a Russian Wordle implementation and
some Nim/Nimib experiments) plus several font files. Those paths were purged
from the history on 2026-09-17 so that they are no longer part of this
repository.

## 5. Reporting a problem

If you are a rights holder and believe that something in this repository should
not be here, please open an issue at

https://github.com/Shahidsamadov/wordle-azerbaycan-dilinde-web/issues

and it will be reviewed and removed promptly.
