import { AppError } from "../utils/errors/AppError.js";
import { read } from "../repository/read.js";
import { join } from "node:path";
// 1. Import the dynamic names
// import { DATA_FOLDER, DB_FILE } from "../repository/db-config.js";

const path = "./src/assets/";
const file = "help.json";
const DATA_FILE = join(path, file);

export const serviceHelpPage = async (cliInputs) => {
  try {
    let result = await read(path, file);
    if (result == null) {
      throw new AppError(`ERROR: Help page not found ${DATA_FILE}`, "ENOENT");
    }
    return result;
  } catch (error) {
    throw error;
  }
};
