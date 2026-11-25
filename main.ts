import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life, under 200 characters.
const JOKE =
  "The office plant died, so HR replaced it with a poster of a plant — the same way they handle burnout.";

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";

// Clear the contents of the output directory without removing the
// directory itself: /output is a mount point in the grading sandbox,
// so deleting it fails.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(JOKE);
