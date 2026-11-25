import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 160;
const LINE =
  "WARNING: This human is always 'five minutes away' from a place they have not yet left.";

export function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS || !LINE.trim()) {
    throw new Error(`entry must be 1-${MAX_CHARS} non-blank characters`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
