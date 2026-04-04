import { Task } from "./app.js";

/* *** Add Tasks *** */
// If task description empty
new Task(); // Description = 'Empty Task'

new Task("Learn JavaScript");
new Task("Make some friends");
new Task("Take a nap");

/* *** Update tasks *** */
// If id not found
Task.update(10, "Build CLI tool"); // Error: Task not found with (ID: 10)
// If description empty
Task.update(1); // Error: Description is empty (ID: 1)

Task.update(1, "Build CLI tool");

/* *** List all tasks *** */
Task.list;

/* *** List all tasks that are done *** */
// Task.listDone;

/* *** List all tasks that are not done *** */
// Task.listNotDone;

/* *** List all tasks that are in progress *** */
// Task.listInProgress;
