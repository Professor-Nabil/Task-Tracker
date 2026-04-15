import { validateDescription } from "../middlewares/validate-description.js";
import { validateId } from "../middlewares/validate-id.js";
import { controllerAdd } from "../controllers/controller-add.js";
import { controllerHelp } from "../controllers/controller-help.js";

export const routesCommandsInputs = (cliInputs) => {
  if (cliInputs[0] === "add") {
    validateDescription(cliInputs[1]);
    controllerAdd(cliInputs);
  } else if (cliInputs[0] === "update") {
    validateId(cliInputs[1]);
    validateDescription(cliInputs[2]);
    console.log("Update");
  } else {
    controllerHelp(cliInputs);
  }
};
