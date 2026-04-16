import { serviceListTasks } from "../services/service-list-tasks.js";
import { viewListTasks } from "../views/view-list-tasks.js";
import { printFailOperation } from "../views/print-fail-operation.js";

export const controllerList = async (statusFilter) => {
  try {
    // 1. Ask the service for the data (filtered or all)
    const tasks = await serviceListTasks(statusFilter);

    // 2. Direct the data to the specific List View
    // We pass the filter name so the View can print a nice header
    viewListTasks(tasks, statusFilter);
  } catch (error) {
    // 3. Handle system errors (like the file being corrupted)
    printFailOperation(
      `SYSTEM ERROR: Could not retrieve tasks. ${error.message}`,
    );
  }
};
