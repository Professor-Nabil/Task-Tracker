import { serviceMarkTask } from "../services/service-mark-task.js";
import { printSuccessOperition } from "../views/print-success-operation.js";
import { printFailOperation } from "../views/print-fail-operation.js";

export const controllerMark = async (id, status) => {
  try {
    const result = await serviceMarkTask(id, status);

    if (result) {
      printSuccessOperition(result, `Task marked as ${status.toUpperCase()}!`);
    } else {
      printFailOperation(`ERROR: Task ID ${id} not found.`);
    }
  } catch (error) {
    printFailOperation(`SYSTEM ERROR: ${error.message}`);
  }
};
