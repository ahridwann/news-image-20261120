// news-image-20261120 entry (Node 22, standard library only).
//
// The entry is a single pre-rendered image: a one-page newspaper front page
// summing up Friday 20 November 2026, drawn programmatically with PIL and
// stored beside this file as entry.png. The program's only job is to place
// that exact image at the grader's output path, byte for byte, on every run.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Grader run: /output is the writable output directory.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The copy is deterministic: the same input file always produces the same
// output bytes, so the grader's two runs write identical files. No network,
// no randomness, no timestamps are involved anywhere in this program.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryPng = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(entryPng, join(outDir, 'entry.png'));
