import { validateDescription } from "../middlewares/validate-description.js";
import { validateId } from "../middlewares/validate-id.js";
import { validateStatus } from "../middlewares/validate-status.js";
import { controllerAdd } from "../controllers/controller-add.js";
import { controllerUpdate } from "../controllers/controller-update.js";
import { controllerDelete } from "../controllers/controller-delete.js";
import { controllerMark } from "../controllers/controller-mark.js";
import { controllerHelp } from "../controllers/controller-help.js";

export const routesCommandsInputs = (cliInputs) => {
  const [arg0, arg1, arg2] = cliInputs;

  const commands = {
    add: () => {
      const desc = arg1;
      validateDescription(desc);
      controllerAdd(desc);
    },
    update: () => {
      const id = arg1;
      const desc = arg2;
      validateId(id);
      validateDescription(desc);
      controllerUpdate(id, desc);
    },
    delete: () => {
      const id = arg1;
      validateId(id);
      controllerDelete(id);
    },
    mark: () => {
      const id = arg1;
      const status = arg2; // "done", "in-progress", or "not-done"
      validateId(id);
      validateStatus(status);
      controllerMark(id, status);
    },
  };

  // Execution
  if (commands[arg0]) {
    commands[arg0]();
  } else {
    controllerHelp(cliInputs);
  }
};
