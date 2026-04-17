## Generic Utility

Dry Logic:
Scalability:
Consistency:

## Data-Driven Design

in a professional architecture,
we usually distinguish between
`User Data (tasks that change)`
and `Static Assets (information that stays the same)`.

- `./data/tasks.json`:
  This is dynamic. It changes every time you run a command.

- `./src/assets/help.json` (or `./config/help.json`):
  This is static.
  It only changes when you update the app.

## Short-Circuit Evaluation

```bash
# Add a task, and ONLY if it works, show the list.
node src/app.js add "Check the time" && node src/app.js list
# Try to delete ID 999. Since it fails, show the help page instead.
node src/app.js delete 999 || node src/app.js help
```

## Is this a "Unit Test" or something else?

You asked a great question earlier about the "type" of test. Let's look at where this fits in the Testing Pyramid:

Pure Unit Test: Testing a function that just returns a value (like your updateTaskInArray).

Process Unit Test (What this is): Testing a function that interacts with the Node.js process. It's still a unit test because we are isolationg the middleware, but it requires "Mocks" because it touches the system.

Integration Test: If you didn't mock anything and let the middleware actually talk to the View and exit the process, that would be moving toward an integration test (testing how two layers work together).

## ⚠️ The Async Trap
