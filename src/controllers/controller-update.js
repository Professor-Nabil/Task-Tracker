import { serviceUpdateTask } from "../services/service-update-task.js";
import { printSuccessOperition } from "../views/print-success-operation.js";
import { printFailOperation } from "../views/print-fail-operation.js";

export const controllerUpdate = async (id, desc) => {
  try {
    const result = await serviceUpdateTask(id, desc);

    if (result) {
      // Pass the object and a custom success message
      printSuccessOperition(result, "Task Updated!");
    } else {
      // Handle the "Not Found" case gracefully
      printFailOperation(`ERROR: Task id not found (ID: ${id})`);
    }
  } catch (error) {
    // Instead of raw console.error, use your View!
    printFailOperation(`SYSTEM ERROR: ${error.message}`);
  }
};
