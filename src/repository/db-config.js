import path from "path";

// Logic: If Vitest is running, it sets NODE_ENV to 'test'
const isTest = process.env.NODE_ENV === "test";

export const DATA_FOLDER = "data";
export const DB_FILE = isTest ? "tasks.test.json" : "tasks.json";

export const FULL_PATH = path.resolve(DATA_FOLDER, DB_FILE);
