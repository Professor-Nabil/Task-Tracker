import { serviceAddTask } from "../services/service-add-task.js";
import { printSuccessOperition } from "../views/print-success-operation.js";

export const controllerAdd = async (desc) => {
  try {
    const result = await serviceAddTask(desc);
    printSuccessOperition(result, "Task added!");
  } catch (error) {
    console.error(error);
  }
};
