import { serviceHelpPage } from "../services/service-help-page.js";

export const controllerHelp = async (cliInputs) => {
  console.log("NOTE: Still in progress ./src/controllers/controller-help.js");
  const data = await serviceHelpPage(cliInputs);
  console.log(data);
};
