import { serviceAddTask } from "../services/service-add-task.js";
import { printSuccessOperition } from "../views/print-success-operation.js";

export const controllerAdd = async (cliInputs) => {
  try {
    const result = await serviceAddTask(cliInputs[1]);
    printSuccessOperition(result);
  } catch (error) {
    console.error(error);
  }
};
