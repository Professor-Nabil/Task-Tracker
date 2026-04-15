# DATA FLOW

```bash
node src/app.js add "My task description"
```

```js
// ./src/app.js
import { routesCommandsInputs } from "./routes/router-commands-inputs.js";
import { validateArgvLength } from "./middlewares/validate-argv-length.js";
const cliInputs = process.argv.slice(2);
validateArgvLength(cliInputs);
routesCommandsInputs(cliInputs);
```

```js
// ./src/middlewares/validate-argv-length.js
import { printFailOperation } from "../views/print-fail-operation.js";
import { AppError } from "../utils/errors/AppError.js";

export const validateArgvLength = (cliInputs) => {
  try {
    if (cliInputs.length < 1) {
      throw new AppError("Error: Arguments are required");
    }
  } catch (error) {
    printFailOperation(error.message);
    process.exit(1); // Fail fast
  }
};
```

```js
// ./src/utils/errors/AppError.js
export class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.date = new Date();
  }
}
```

```js
// ./src/views/print-fail-operation.js
export const printFailOperation = (msg) => {
  console.error(msg);
};
```

```js
// ./src/routes/router-commands-inputs.js
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
```

```js
// ./src/middlewares/validate-description.js
import { printFailOperation } from "../views/print-fail-operation.js";
export const validateDescription = (desc) => {
  if (desc === "") {
    printFailOperation("ERROR: Description argument is empty");
    process.exit(1);
  } else if (desc == null) {
    printFailOperation("ERROR: Description argument are required");
    process.exit(1);
  }
};
```

```js
// ./src/views/print-fail-operation.js
export const printFailOperation = (msg) => {
  console.error(msg);
};
```

```js
// ./src/controllers/controller-add.js
import { serviceAddTask } from "../services/service-add-task.js";
import { printSuccessOperition } from "../views/print-success-operation.js";

export const controllerAdd = async (cliInputs) => {
  try {
    const result = await serviceAddTask(cliInputs[1]);
    printSuccessOperition(result);
  } catch (error) {
    console.error(error);
  }
};
```

```js
// ./src/services/service-add-task.js
import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { TaskModel } from "../models/Task-Model.js";
import { generateId } from "../utils/services/auto-increment-id.js";

const path = "data";
const file = "tasks.json";

export const serviceAddTask = async (desc) => {
  try {
    // 1. Get current data
    const tasks = (await read(path, file)) || [];

    // 2. Use our Pure Utility to get the next ID
    const nextId = generateId(tasks);

    // 3. Create the "Bones" using your Task Model
    const newTask = new TaskModel(nextId, desc);

    // 4. Update the list
    tasks.push(newTask);

    // 5. Save back to repository
    await write(path, file, tasks);

    return newTask; // Return the object, let the controller decide what to print
  } catch (error) {
    // We THROW so the Controller knows something went wrong
    throw error;
  }
};
```

```js
// ./src/repository/read.js
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const read = async (path, file) => {
  const DATA_FILE = join(path, file);

  try {
    const data = await readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // Rule: The Repository handles the "Physical" error,
    // but lets the Service handle the "Logic" error.
    if (error.code === "ENOENT") {
      return null; // File simply doesn't exist yet
    }

    // If it's a SyntaxError (broken JSON) or Permission error,
    // we THROW because that is a "System Failure."
    throw error;
  }
};
```

```js
// ./src/utils/services/auto-increment-id.js
export const generateId = (tasks) => {
  if (!tasks || tasks.length === 0) return 1;

  // Find the highest ID and add 1
  const ids = tasks.map((task) => task.id);
  return Math.max(...ids) + 1;
};
```

```js
// ./src/models/Task-Model.js
export class TaskModel {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = "todo";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
```

```js
// ./src/repository/write.js
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Repository: Write Module
 * Responsibility: Physical persistence of data to the disk.
 */
export const write = async (path, fileName, data) => {
  const DATA_FILE = join(path, fileName);

  try {
    // 1. Ensure the directory exists (helpful if /data is missing)
    await mkdir(path, { recursive: true });

    // 2. Convert data to JSON string
    // null, 2 adds indentation to make tasks.json human-readable in Neovim/CLI
    const jsonData = JSON.stringify(data, null, 2);

    // 3. Save to disk
    await writeFile(DATA_FILE, jsonData, "utf8");

    return true;
  } catch (error) {
    // We throw the error so the Service/Controller knows the "Hands" failed
    throw new Error(`Failed to write to ${DATA_FILE}: ${error.message}`);
  }
};
```

```js
// ./src/views/print-success-operation.js
export const printSuccessOperition = (msg) => {
  console.log(msg);
};
```

```bash
# Outputs:
TaskModel {
  id: 1,
  description: 'My task description',
  status: 'todo',
  createdAt: 2026-04-15T19:34:25.602Z,
  updatedAt: 2026-04-15T19:34:25.602Z
}
```
