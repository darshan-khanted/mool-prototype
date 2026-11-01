#!/usr/bin/env python3
"""
Inline the whole Mool prototype into one portable .html file.

    python3 build-single-file.py          # needs Pillow:  pip install pillow

Writes ../Mool-prototype.html — a single file you can download, email, or open
straight from a phone. No server needed.

Art is compressed by the role it plays on screen. Most paintings sit behind a
heavy dark gradient, so they are downscaled and slightly blurred: that keeps the
file small and still reads as an atmospheric background. The full-resolution
originals stay in assets/art/ for the real app.
"""
import base64, io, os, re, glob
from PIL import Image, ImageFilter

SRC = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(SRC), 'Mool-prototype.html')

# role -> (max width, jpeg-ish quality, pre-blur radius)
BACKDROP = (480, 60, 0.9)   # full-screen, under a dark gradient
SHARP    = (460, 72, 0.0)   # shown clearly as a small museum plate
ROLES = {'ganesha-scribe': SHARP}

uris, total = {}, 0
for path in sorted(glob.glob(os.path.join(SRC, 'assets/art/*.jpg'))):
    name = os.path.basename(path)
    key = 'assets/art/' + name
    width, quality, blur = ROLES.get(name[:-4], BACKDROP)

    im = Image.open(path).convert('RGB')
    im.thumbnail((width, int(width * 1.45)))
    if blur:
        im = im.filter(ImageFilter.GaussianBlur(blur))
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=quality, method=6)
    data = buf.getvalue()
    total += len(data)

    uris[key] = 'data:image/webp;base64,' + base64.b64encode(data).decode()
    role = 'sharp ' if blur == 0 else 'backdrop'
    print(f'  {name:24s} {role}  {im.size[0]}x{im.size[1]}  {len(data)//1024:3d} KB')

print(f'  art: {total // 1024} KB raw -> {int(total * 1.37) // 1024} KB inlined')

read = lambda n: open(os.path.join(SRC, n), encoding='utf-8').read()

def swap(text):
    for key, uri in uris.items():
        text = text.replace(key, uri)
    return text

html = read('index.html')
html = html.replace(
    '  <link rel="stylesheet" href="styles.css" />',
    '  <style>\n' + swap(read('styles.css')) + '\n  </style>')
html = html.replace(
    '  <script src="content.js"></script>\n  <script src="app.js"></script>',
    '  <script>\n' + swap(read('content.js')) + '\n  </script>\n  <script>\n' + read('app.js') + '\n  </script>')
html = html.replace(
    '<p class="deck__kicker">prototype v0.1 · not a real app yet</p>',
    '<p class="deck__kicker">prototype v0.1 · single file · works offline</p>')

assert '<style>' in html and 'const ART' in html and '(() =>' in html, 'inlining failed'
assert 'href="styles.css"' not in html and 'src="app.js"' not in html, 'stray file reference'
leftover = re.findall(r'assets/art/[a-z-]+[.]jpg', html)
assert not leftover, f'un-inlined art: {leftover}'

open(OUT, 'w', encoding='utf-8').write(html)
print(f'\n  wrote {OUT}  ({os.path.getsize(OUT) // 1024} KB)')
