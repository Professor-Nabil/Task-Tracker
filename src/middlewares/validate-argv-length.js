import { printFailOperation } from "../views/print-fail-operation.js";
import { AppError } from "../utils/errors/AppError.js";

export const validateArgvLength = (cliInputs) => {
  try {
    if (cliInputs.length < 1) {
      throw new AppError("Error: Arguments are required");
    }
  } catch (error) {
    printFailOperation(error.message);
    process.exit(1); // Fail fast
  }
};
