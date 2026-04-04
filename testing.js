import { Task } from "./app.js";

/* *** Add Tasks *** */
// If task description empty
new Task(); // Description = 'Empty Task'
new Task("Learn JavaScript");
new Task("Make some friends");
new Task("Take a nap");

/* *** List all tasks *** */
// Task.list;

/* *** List all tasks that are done *** */
// Task.listDone;

/* *** List all tasks that are not done *** */
// Task.listNotDone;

/* *** List all tasks that are in progress *** */
// Task.listInProgress;
