# Mool — scroll your roots

A clickable prototype: **the Mahabharata as a vertical feed**, in the format a thumb already knows. One story beat per screen, swipe up for the next, double-tap to like — and **every screen cites the text it came from**.

> **▶ Open the live demo:** https://darshan-khanted.github.io/mool-prototype/
>
> Best on a phone. On a desktop it appears inside a phone frame.

This is a design prototype, not a real app. Nothing is sent anywhere; likes and saves live in your browser only.

---

## What's in it

| | |
|---|---|
| **Start** | Pick a language, then 4 "Start here" screens on what these texts are |
| **Story** | Season 1, Episode 1 — *The River's Son*, 19 screens: Shantanu and Ganga through to Bhishma's vow |
| **Discover** | 8 standalone hooks: "Myth vs Vyasa", the Yaksha's question, Karna's real name, two Gita verses, and more |
| **Journey** | ० Start here → १ Vedas → २ Upanishads → ३ Itihasa *(Mahabharata live, Ramayana coming soon)* → ४ Puranas, each locked stage with a real teaser verse and a "Notify me" vote |
| **Languages** | English · हिंदी · Hinglish, switchable on every screen |

Also: save, share, streak diya, and an optional tanpura drone synthesized live in the browser (no audio files).

## Every screen shows its source

Each screen carries one of three labels, and the scroll icon opens the original passage:

- **In the text** — straight from the scripture, with book and section
- **Later addition** — in some versions, but not the oldest manuscripts
- **Popular myth** — famous from TV or folklore, but not in the text

### Sources (all public domain)

| Text | Translation |
|---|---|
| Mahabharata | K. M. Ganguli, English prose (1883–96) · [Project Gutenberg #15474](https://www.gutenberg.org/ebooks/15474) |
| Bhagavad Gita | Annie Besant, 4th ed. (1922) · [Wikisource](https://en.wikisource.org/wiki/Bhagavad-Gita_(Besant_4th)) |
| Rigveda | R. T. H. Griffith, *The Hymns of the Rigveda* · [Wikisource](https://en.wikisource.org/wiki/The_Hymns_of_the_Rigveda) |
| Ramayana | R. T. H. Griffith, *The Rámáyan of Válmíki* · [Project Gutenberg #24869](https://www.gutenberg.org/ebooks/24869) |
| Reference | BORI Critical Edition — used only to identify later additions, never quoted |

Paintings are public domain or CC0 via Wikimedia Commons: Raja Ravi Varma (d. 1906) and folios from the *Razmnama*, the Persian Mahabharata made at Akbar's court (c. 1598–1617). Credits appear in-app under Journey → Sources & credits.

**Hindi and Hinglish are this project's own translations and still need review by native speakers.**

## Files

```
index.html              shell + hand-drawn SVG icon set
styles.css              design system
content.js              ← all text in 3 languages + source excerpts. Edit this to change content.
app.js                  feed, double-tap, language switching, journey, sheets, audio
assets/art/             9 public-domain paintings (full resolution)
Mool-prototype.html     the whole thing inlined into one 477 KB file — download and open anywhere
build-single-file.py    regenerates that single file (needs Pillow)
```

## Running it

Any static server works, for example:

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

Or just download **`Mool-prototype.html`** and open it. One file, no server, works offline apart from the web fonts.

To rebuild the single file after editing:

```bash
pip install pillow
python3 build-single-file.py
```

## Known gaps

- Hindi and Hinglish need native review, especially whether the Hinglish reads naturally to Gen Z
- Art in the single-file build is downscaled and slightly blurred to keep it small; full-resolution originals are in `assets/art/`
- No comments feature (deliberate: moderation load and religious sensitivity)
- Like counts are never shown, since fake numbers would undercut a trust-first product
