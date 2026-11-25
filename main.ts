import { mkdirSync, writeFileSync } from "node:fs";

const line = "I toasted the smoke alarm. Your bread is fine.";

// Gate: UTF-8 text, 1-120 chars, single line, not only whitespace.
if (
  line.length < 1 ||
  line.length > 120 ||
  line.includes("\n") ||
  line.includes("\r") ||
  line.trim().length === 0
) {
  throw new Error("line must be 1-120 chars, single line, non-blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
