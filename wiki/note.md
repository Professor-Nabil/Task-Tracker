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
