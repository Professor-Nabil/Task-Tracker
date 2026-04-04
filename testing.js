import { Task } from "./app.js";

/* TEST: *** Add Tasks *** */

// If task description empty
new Task(); // Description = 'Empty Task'

new Task("Learn JavaScript");
new Task("Make some friends");
new Task("Take a nap");

/* TEST: *** Update tasks *** */

// If id not found
Task.update(1000, "Build CLI tool"); // Error: Task not found with (ID: 10)
// If description empty
Task.update(1); // Error: Description is empty (ID: 1)

Task.update(1, "Build CLI tool");

/* TEST: *** Delete tasks *** */

// If id not found
Task.delete(1000);

Task.delete(2);

/* TEST: *** List all tasks *** */

Task.list;

/* TEST: *** List all tasks that are done *** */

// Task.listDone;

/* TEST: *** List all tasks that are not done *** */

// Task.listNotDone;

/* TEST: *** List all tasks that are in progress *** */

// Task.listInProgress;
