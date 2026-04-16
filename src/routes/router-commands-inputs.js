import { validateDescription } from "../middlewares/validate-description.js";
import { validateId } from "../middlewares/validate-id.js";
import { controllerAdd } from "../controllers/controller-add.js";
import { controllerUpdate } from "../controllers/controller-update.js";
import { controllerHelp } from "../controllers/controller-help.js";

export const routesCommandsInputs = (cliInputs) => {
  if (cliInputs[0] === "add") {
    const desc = cliInputs[1];
    validateDescription(desc);
    controllerAdd(cliInputs);
  } else if (cliInputs[0] === "update") {
    const id = cliInputs[1];
    const desc = cliInputs[2];
    validateId(id);
    validateDescription(desc);
    controllerUpdate(id, desc);
  } else {
    controllerHelp(cliInputs);
  }
};
