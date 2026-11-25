import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "fix: fixed the bug by removing the code that had the bug. And the feature. And tests. Ship.";

// The gate allows 1-100 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 100) {
  throw new Error(`entry text is ${line.length} characters, must be 1-100`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
