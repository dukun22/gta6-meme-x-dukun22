# GTA 6: Still Stuck at 99%

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dukun22/gta6-meme-x-dukun22/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/dukun22/gta6-meme-x-dukun22/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty.

## The joke

After 13 years of waiting for GTA 6, the loading screen is still stuck at 99% — and the make.fun ghost, suitcase packed, has given up waiting on a Vice City curb. The picture is `meme.png` (1024×1024).

## How it is made

- `scene.png` — an original AI-generated cartoon of a neon Vice City-style street at dusk (no Rockstar art, no screenshots, no copied characters).
- `ghost-mark.png` — make.fun's own ghost mascot from its press kit (https://make.fun/press/), worked into the scene with a `make.fun` tag.
- `render.mjs` — lays out the meme (top text, scene with a 99% loading bar, ghost on the curb, bottom text) and screenshots it with headless Chromium into `meme.png`.
- `main.ts` (Node 22, standard library only) — copies `POST.json` to the output directory; the post itself is the entry.

## The post

The meme goes out from the public X account **@lazydrop22**, with the exact text in `POST_TEXT.txt` (make.fun link, @makefunai, and the play code). `POST.json` names the post's address once it is posted.

My make.fun referral code is `0y8y43sq` — https://make.fun/r/0y8y43sq
