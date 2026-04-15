import { serviceHelpPage } from "../services/service-help-page.js";
import { printHelpPage } from "../views/print-help-page.js";
import { printFailOperation } from "../views/print-fail-operation.js";

export const controllerHelp = async (cliInputs) => {
  try {
    const data = await serviceHelpPage(cliInputs);
    printHelpPage(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      printFailOperation(error.message);
      process.exit(1);
    }
    console.error(error);
  }
};
