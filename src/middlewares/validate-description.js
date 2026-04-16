import { printFailOperation } from "../views/print-fail-operation.js";
export const validateDescription = async (desc) => {
  if (desc === "") {
    printFailOperation("ERROR: Description argument is empty");
    process.exit(1);
  } else if (desc == null) {
    printFailOperation("ERROR: Description argument are required");
    process.exit(1);
  }
};
