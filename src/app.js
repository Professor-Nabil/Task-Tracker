import { routesCommandsInputs } from "./routes/router-commands-inputs.js";
import { validateArgvLength } from "./middlewares/validate-argv-length.js";

const cliInputs = process.argv.slice(2);
// nodemon -w fill-the-database.sh -x "clear; ./fill-the-database.sh"

// const cliInputs = []; // If no arguments pass

// const cliInputs = ["help"]; // If argument is wrong
// const cliInputs = ["anything else"]; // If argument is wrong

// =============================================================
// const cliInputs = ["add"]; // If no description argument pass
// const cliInputs = ["add", ""]; // If description is empty
// const cliInputs = ["add", "my description"]; // *** Add Task ***
// const cliInputs = ["add", "My task description"]; // *** Add Task ***

// =============================================================
// const cliInputs = ["update"]; // If no id argument pass
// const cliInputs = ["update", 0]; // If id is less than 1
// const cliInputs = ["update", 1.5]; // If id is a float
// const cliInputs = ["update", "some text"]; // If id not a number
// const cliInputs = ["update", 1]; // If no description argument pass
// const cliInputs = ["update", 1, ""]; // If description is empty
// const cliInputs = ["update", 999999, "My new task description"]; // If id not found
// const cliInputs = ["update", 5, "My new task description"]; // *** Update ***

// =============================================================
// const cliInputs = ["delete"]; // If no id argument pass
// const cliInputs = ["delete", 0]; // If id is less than 1
// const cliInputs = ["delete", 1.5]; // If id is a float
// const cliInputs = ["delete", "some text"]; // If id not a number
// const cliInputs = ["delete", 1]; // *** Delete Task ***

// =============================================================
// const cliInputs = ["mark"]; // If no id argument pass
// const cliInputs = ["mark", 0]; // If id is less than 1
// const cliInputs = ["mark", 1.5]; // If id is a float
// const cliInputs = ["mark", "some text"]; // If id not a number
// const cliInputs = ["mark", 3]; // If no status argument pass
// const cliInputs = ["mark", 3, ""]; // If no status is empty
// const cliInputs = ["mark", 3, "some text"]; // If wrong status pass
// const cliInputs = ["mark", 1, "done"]; // If id not found
// const cliInputs = ["mark", 3, "done"]; // *** Change Tasks status ***
// const cliInputs = ["mark", 3, "in-progress"]; // *** Change Tasks status ***
// const cliInputs = ["mark", 3, "not-done"]; // *** Change Tasks status ***

// =============================================================
// const cliInputs = ["list"]; // *** List all task ***
// const cliInputs = ["list", "done"]; // *** List all tasks with status done ***
// const cliInputs = ["list", "in-progress"]; // *** List all tasks with status in-progress ***
// const cliInputs = ["list", "not-done"]; // *** List all tasks except tasks with status done ***

// 1. Synchronous validation happens first
validateArgvLength(cliInputs);

// 2. Wrap the execution in an async flow
const run = async () => {
  try {
    // We WAIT for the entire routing and controller logic to finish
    await routesCommandsInputs(cliInputs);

    // 3. Only exit 0 after everything is confirmed done
    process.exit(0);
  } catch (error) {
    // This catches any errors that bubbled up from services/controllers
    console.error("CRITICAL SYSTEM ERROR:", error.message);
    process.exit(1);
  }
};

run();
