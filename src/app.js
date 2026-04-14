import { routesCommandsInputs } from "./routes/router-commands-inputs.js";
import { validateArgvLength } from "./middlewares/validate-argv-length.js";

const cliInputs = process.argv.slice(2);

validateArgvLength(cliInputs);

async function run() {
  await routesCommandsInputs(cliInputs);
}
run();
