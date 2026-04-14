import { controllerHelp } from "../controllers/controller-help.js";

export const routesCommandsInputs = async (cliInputs) => {
  console.log("NOTE: Still in progress ./src/routes/router-commands-inputs.js");

  if (cliInputs[0] === "add") {
    console.log("add");
  } else {
    await controllerHelp(cliInputs);
  }
};
