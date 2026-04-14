import { read } from "../repository/read.js";

export const serviceHelpPage = async (cliInputs) => {
  const result = await read("data", "help.json");
  console.log(result);
  return "NOTE: Still in progress ./src/services/service-help-page.js";
};
