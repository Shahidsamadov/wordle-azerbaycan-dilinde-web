#!/usr/bin/env python3
"""Generate the extra PNG icons the web app manifest and iOS need.

    pip install Pillow
    python tools/build_icons.py

Produces (from images/wordleaz_logo_512x512.png):

    images/wordleaz_logo_180x180.png  apple-touch-icon (iOS home screen)
    images/maskable_512x512.png       Android "maskable" icon

Why a maskable icon
-------------------
Android crops launcher icons to whatever shape the device uses (circle,
squircle, rounded square).  A normal icon is cropped, so the artwork can be cut
off.  A maskable icon must keep its important content inside a circle with a
diameter of 80% of the image ("safe zone") and must fill the whole square with
background, so the launcher can crop freely.

The source logo already has a full-bleed background, so the script samples the
colour of its top-left corner, fills a 512x512 canvas with that colour and
pastes the logo scaled down so that it stays inside the safe zone.

Note: Pillow is only needed for this developer tool - the website itself ships
plain PNG files.
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:  # pragma: no cover - developer feedback only
    print("Pillow is required:  pip install Pillow")
    raise SystemExit(1)

REPO_ROOT = Path(__file__).resolve().parent.parent
IMAGES = REPO_ROOT / "images"
SOURCE = IMAGES / "wordleaz_logo_512x512.png"

#: Sizes Apple documents for the home screen icon.
APPLE_TOUCH_SIZE = 180

#: Android maskable canvas size.
MASKABLE_SIZE = 512

#: Fraction of the canvas the artwork may occupy.  The safe zone is a circle of
#: 80% diameter; a square that fits inside it may use at most 1/sqrt(2) of that,
#: i.e. ~56%.  0.55 keeps the artwork comfortably inside.
ARTWORK_RATIO = 0.55


def load_source() -> Image.Image:
    if not SOURCE.exists():
        print(f"Source icon not found: {SOURCE}")
        raise SystemExit(1)
    return Image.open(SOURCE).convert("RGBA")


def build_apple_touch_icon(source: Image.Image) -> Path:
    """Plain downscale - iOS applies its own rounded mask."""
    target = IMAGES / f"wordleaz_logo_{APPLE_TOUCH_SIZE}x{APPLE_TOUCH_SIZE}.png"
    source.resize((APPLE_TOUCH_SIZE, APPLE_TOUCH_SIZE), Image.LANCZOS).save(
        target, "PNG", optimize=True
    )
    return target


def build_maskable_icon(source: Image.Image) -> Path:
    """Center the artwork on a full-bleed background of its own colour."""
    background = source.getpixel((0, 0))

    canvas = Image.new("RGBA", (MASKABLE_SIZE, MASKABLE_SIZE), background)

    side = int(MASKABLE_SIZE * ARTWORK_RATIO)
    artwork = source.resize((side, side), Image.LANCZOS)
    offset = ((MASKABLE_SIZE - side) // 2, (MASKABLE_SIZE - side) // 2)
    canvas.paste(artwork, offset)

    target = IMAGES / f"maskable_{MASKABLE_SIZE}x{MASKABLE_SIZE}.png"
    canvas.save(target, "PNG", optimize=True)
    return target


def main() -> int:
    source = load_source()
    print(f"Source: {SOURCE.name} {source.size}")

    for path in (build_apple_touch_icon(source), build_maskable_icon(source)):
        size_kb = path.stat().st_size / 1024
        print(f"  wrote {path.relative_to(REPO_ROOT)}  ({size_kb:.1f} KB)")

    print("\nBoth files are referenced from index.html / manifest.json.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
