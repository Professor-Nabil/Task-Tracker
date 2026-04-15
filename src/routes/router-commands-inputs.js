import { validateDescription } from "../middlewares/validate-description.js";
import { controllerAdd } from "../controllers/controller-add.js";
import { controllerHelp } from "../controllers/controller-help.js";

export const routesCommandsInputs = (cliInputs) => {
  if (cliInputs[0] === "add") {
    validateDescription(cliInputs[1]);
    controllerAdd(cliInputs);
  } else {
    controllerHelp(cliInputs);
  }
};
