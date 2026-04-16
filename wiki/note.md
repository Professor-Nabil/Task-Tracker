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
