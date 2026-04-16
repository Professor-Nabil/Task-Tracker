import { serviceDeleteTask } from "../services/service-delete-task.js";
import { printSuccessOperition } from "../views/print-success-operation.js";
import { printFailOperation } from "../views/print-fail-operation.js";

export const controllerDelete = async (id) => {
  try {
    const result = await serviceDeleteTask(id);

    if (result) {
      // We pass the deleted task object so the user can see what they deleted
      printSuccessOperition(result, "Task Deleted Successfully!");
    } else {
      // If the service returned null, the ID didn't exist
      printFailOperation(`ERROR: Cannot delete. Task ID not found (ID: ${id})`);
    }
  } catch (error) {
    // Catching file system errors or unexpected crashes
    printFailOperation(`SYSTEM ERROR: ${error.message}`);
  }
};
