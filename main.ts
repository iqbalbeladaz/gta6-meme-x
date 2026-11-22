// gta6-meme-x entry program (Node 22, standard library only).
// The entry itself is the X post named in POST.json: the house reads the
// post from X (its first picture and its text) and judges that. This
// program's only job is to hand POST.json to the grader by copying it
// from the repository root (/bot, or MAKEFUN_BOT_DIR locally) into the
// output directory (/output, or MAKEFUN_OUTPUT_DIR locally).
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  console.error(
    `gta6-meme-x: could not copy POST.json from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
