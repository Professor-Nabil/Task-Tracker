import path from "path";

// Logic: If Vitest is running, it sets NODE_ENV to 'test'
const isTest = process.env.NODE_ENV === "test";

export const DATA_FOLDER = "data";
export const DB_FILE = isTest ? "tasks.test.json" : "tasks.json";

export const FULL_PATH = path.resolve(DATA_FOLDER, DB_FILE);

// This is for  Help Asset path (Help Page)
export const ASSETS_FOLDER = path.resolve("src", "assets");
export const HELP_FILE = "help.json";
