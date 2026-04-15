import { routesCommandsInputs } from "./routes/router-commands-inputs.js";
import { validateArgvLength } from "./middlewares/validate-argv-length.js";

// const cliInputs = process.argv.slice(2);

// const cliInputs = []; // If no arguments pass

// const cliInputs = ["help"]; // If argument is wrong
// const cliInputs = ["anything else"]; // If argument is wrong

// =============================================================
// const cliInputs = ["add"]; // If no description argument pass
// const cliInputs = ["add", ""]; // If description is empty
// const cliInputs = ["add", "my description"]; // *** Add Task ***
const cliInputs = ["add", "My task description"]; // *** Add Task ***

// =============================================================
// const cliInputs = ["update", 1]; // *** Update Task ***

// =============================================================
// const cliInputs = ["delete", 1]; // *** Delete Task ***

// =============================================================
// const cliInputs = ["mark", 1, "done"]; // *** Change Tasks status ***
// const cliInputs = ["mark", 2, "in-progress"]; // *** Change Tasks status ***
// const cliInputs = ["mark", 3, "not-done"]; // *** Change Tasks status ***

// =============================================================
// const cliInputs = ["list"]; // *** List all task ***
// const cliInputs = ["list", "done"]; // *** List all tasks with status done ***
// const cliInputs = ["list", "in-progress"]; // *** List all tasks with status in-progress ***
// const cliInputs = ["list", "not-done"]; // *** List all tasks except tasks with status done ***

validateArgvLength(cliInputs);

routesCommandsInputs(cliInputs);
