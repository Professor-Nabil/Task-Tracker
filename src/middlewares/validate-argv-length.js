import { printFailOperation } from "../views/print-fail-operation.js";

export const validateArgvLength = (cliInputs) => {
  if (cliInputs.length < 1) {
    printFailOperation("Error: Arguments are required");
    process.exit(1); // Fail fast
  }
};
