import { printFailOperation } from "../views/print-fail-operation.js";

export const validateStatus = async (status) => {
  const validStatuses = ["done", "in-progress", "not-done"];

  if (!status) {
    printFailOperation(
      "ERROR: Status is required (done, in-progress, or not-done)",
    );
    process.exit(1);
  }

  if (!validStatuses.includes(status)) {
    printFailOperation(
      `ERROR: Invalid status "${status}". Use: done, in-progress, or not-done`,
    );
    process.exit(1);
  }
};
