import { Task } from "./task-class.js";

// ===============================================================================
/* TEST: *** Add Tasks *** */

// BUG: If task description empty
new Task(); // Just make Description = 'Empty Task'

new Task("Learn JavaScript");
new Task("Make some friends");
new Task("Take a nap");

// ===============================================================================
/* TEST: *** Update tasks *** */

// BUG: If id not found
Task.update(1000, "Build CLI tool"); // Error: Task not found with (ID: 1000)
// BUG: If description empty
Task.update(1); // Error: Description is empty (ID: 1)

Task.update(1, "Build CLI tool");

// ===============================================================================
/* TEST: *** Delete tasks *** */

// BUG: If id not found
Task.delete(1000); // Error: Task not found with (ID: 1000)

Task.delete(2);

// ===============================================================================
/* TEST: *** Mark a task as in progress or done *** */

// BUG: If id not found
Task.mark(1000, "done"); // Error: Task not found with (ID: 1000)

// BUG: If Status not ("done" or "in-progress" or "todo")
Task.mark(1, "anyghing"); // Error: Task status must be ("done" or "in-progress" or "todo")

Task.mark(1, "done"); // Task status changed successfully (ID: 1) (status: done)
Task.mark(1, "in-progress"); // Task status changed successfully (ID: 1) (status: in-progress)
Task.mark(1, "todo"); // Task status changed successfully (ID: 1) (status: todo)

// ===============================================================================
/* TEST: *** List all tasks *** */

// BUG: If list is empty --> Error: List is empty

Task.list;

// ===============================================================================
/* TEST: *** List all tasks that are done *** */

// BUG: If no "task done" found --> No "task done" found

Task.listDone;

// ===============================================================================
/* TEST: *** List all tasks that are not done *** */

// BUG: If no "finish task" found --> No "finish task" found

Task.listNotDone;

// ===============================================================================
/* TEST: *** List all tasks that are in progress *** */

// BUG: In no "task in progress" fondd --> No "task in progress" found

Task.listInProgress;
