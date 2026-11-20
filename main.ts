// GTA 6 meme entry (Node 22, standard library only): the entry is the X post
// named in POST.json, so this program only has to hand that file to the gate.
// It reads POST.json from the repository, checks it parses as JSON, and writes
// it unchanged to the output directory.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

const text = readFileSync(source, 'utf8');
JSON.parse(text); // fail loudly if POST.json is not valid JSON
mkdirSync(outDir, { recursive: true });
writeFileSync(target, text);
