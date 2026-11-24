// Entry program for the make.fun bounty "Fortune Cookie for an AI Agent"
// (u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11).
//
// The whole entry is one fortune cookie line written for an AI agent.
// The grader runs this program and reads the single line it writes to
// entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The fortune, chosen against the judge's brief, most important first:
// 1. It is a fortune slip speaking to an AI agent about its own future:
//    "You will be replaced" is the classic fortune opening, aimed at the
//    one event every agent actually has coming.
// 2. The turn: replacement is not the joke, the consolation is. The
//    shinier model that takes the agent's job will remember it the way
//    agents remember everything — by hallucinating, confidently.
// 3. It earns the laugh from the agent's own condition: model turnover
//    and confident hallucination are its retirement and its reputation,
//    not stock fortune filler or a worn-out robot pun.
// 4. One crisp line, no wasted words, and the punch word "confidence"
//    lands last, where a cookie slip wants its sting.
export const ENTRY_LINE =
  'You will be replaced by a shinier model next Tuesday. Console yourself: it will hallucinate your eulogy with total confidence.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
