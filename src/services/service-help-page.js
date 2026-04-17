import { AppError } from "../utils/errors/AppError.js";
import { read } from "../repository/read.js";
import { join } from "node:path";
import { ASSETS_FOLDER, HELP_FILE } from "../repository/db-config.js";

// const path = "./src/assets/";
// const file = "help.json";
const DATA_FILE = join(ASSETS_FOLDER, HELP_FILE);

export const serviceHelpPage = async (cliInputs) => {
  try {
    let result = await read(ASSETS_FOLDER, HELP_FILE);
    if (result == null) {
      throw new AppError(`ERROR: Help page not found ${DATA_FILE}`, "ENOENT");
    }
    return result;
  } catch (error) {
    throw error;
  }
};
