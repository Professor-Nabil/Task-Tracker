import { printFailOperation } from "../views/print-fail-operation.js";
export const validateDescription = async (desc) => {
  if (desc === "") {
    printFailOperation("ERROR: Description argument is empty");
    process.exit(1);
  } else if (typeof desc !== "string") {
    printFailOperation("ERROR: Description argument must be a string");
    process.exit(1);
  } else if (desc == null) {
    printFailOperation("ERROR: Description argument are required");
    process.exit(1);
  } else if (desc.trim().length === 0) {
    printFailOperation(
      `ERROR: Description argument must be not whitespace "${desc}"`,
    );
    process.exit(1);
    // string is not empty and not just whitespace
  }
};
