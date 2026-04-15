import { AppError } from "../utils/errors/AppError.js";
import { read } from "../repository/read.js";
import { join } from "node:path";

const path = "data";
const file = "help.json";
const DATA_FILE = join(path, file);

export const serviceHelpPage = async (cliInputs) => {
  try {
    let result = await read(path, file);
    if (result == null) {
      // throw new Error(`ERROR: Help page not found ${DATA_FILE}`);
      throw new AppError(`ERROR: Help page not found ${DATA_FILE}`, "ENOENT");
    }
    return result;
  } catch (error) {
    throw error;
  }
};
