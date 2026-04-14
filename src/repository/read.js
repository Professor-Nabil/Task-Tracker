import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const read = async (path, file) => {
  const DATA_DIR = path;
  const DATA_FILE = join(DATA_DIR, file);

  try {
    const data = await readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return "help file not found";
    }
    if (error instanceof SyntaxError) {
      throw new Error(`Failed to parse help file: ${error.message}`);
    }
    throw new Error(`Failed to read help file: ${error.message}`);
  }
};
