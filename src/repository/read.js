import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const read = async (path, file) => {
  const DATA_FILE = join(path, file);

  try {
    const data = await readFile(DATA_FILE, "utf8");

    // NEW: Check if the file is physically empty (0 bytes)
    if (!data || data.trim().length === 0) {
      return null;
    }

    return JSON.parse(data);
  } catch (error) {
    // Rule: The Repository handles the "Physical" error,
    // but lets the Service handle the "Logic" error.
    if (error.code === "ENOENT") {
      return null; // File simply doesn't exist yet
    }

    // If it's a SyntaxError (broken JSON) or Permission error,
    // we THROW because that is a "System Failure."
    throw error;
  }
};
