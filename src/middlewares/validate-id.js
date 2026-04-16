import { printFailOperation } from "../views/print-fail-operation.js";

export const validateId = async (id) => {
  if (id == null) {
    printFailOperation("ERROR: Id argument are required");
    process.exit(1);
  }
  // 1. Convert to Number (in case it's a string from process.argv)
  const numericId = Number(id);

  // 2. Check if it's a valid Number
  if (isNaN(numericId)) {
    printFailOperation("ERROR: Id must be a number");
    process.exit(1);
  }

  // 3. Check if it's a Float (1.5)
  if (!Number.isInteger(numericId)) {
    printFailOperation("ERROR: Id must be a whole number (integer)");
    process.exit(1);
  }

  // 4. Check if it's positive
  if (numericId < 1) {
    printFailOperation("ERROR: Id must be greater than 0");
    process.exit(1);
  }
};
