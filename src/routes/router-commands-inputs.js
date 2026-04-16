import { validateDescription } from "../middlewares/validate-description.js";
import { validateId } from "../middlewares/validate-id.js";
import { validateStatus } from "../middlewares/validate-status.js";
import { controllerAdd } from "../controllers/controller-add.js";
import { controllerUpdate } from "../controllers/controller-update.js";
import { controllerDelete } from "../controllers/controller-delete.js";
import { controllerMark } from "../controllers/controller-mark.js";
import { controllerList } from "../controllers/controller-list.js";
import { controllerHelp } from "../controllers/controller-help.js";

export const routesCommandsInputs = async (cliInputs) => {
  try {
    const [arg0, arg1, arg2] = cliInputs;

    const commands = {
      add: async () => {
        const desc = arg1;
        await validateDescription(desc);
        await controllerAdd(desc);
      },
      update: async () => {
        const id = arg1;
        const desc = arg2;
        await validateId(id);
        await validateDescription(desc);
        await controllerUpdate(id, desc);
      },
      delete: async () => {
        const id = arg1;
        await validateId(id);
        await controllerDelete(id);
      },
      mark: async () => {
        const id = arg1;
        const status = arg2; // "done", "in-progress", or "not-done"
        await validateId(id);
        await validateStatus(status);
        await controllerMark(id, status);
      },
      list: async () => {
        const filter = arg1; // done, in-progress, or not-done
        await controllerList(filter);
      },
    };

    // Execution
    if (commands[arg0]) {
      await commands[arg0]();
    } else {
      await controllerHelp(cliInputs);
    }
    // process.exit(0);
  } catch (error) {}
};
