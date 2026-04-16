# Testing Strategy

---

## 1. Unit Testing

- Goal: Test isolated functions in total isolation. No file system access.

- Target Folders: `./src/utils/` and `./src/middlewares/`
  - `utils/services/`:
    These are the most important.
    You should test update-task-in-array.js
    by passing it a fake array and a fake object
    to ensure it returns the correct result without touching a real JSON file.

  - `utils/date/`: Test if `get-local-time.js` returns the expected format.

  - `middlewares/`:
    Test `validate-id.js` by passing it `strings`, `negative numbers`,
    and `NaN` to see if it correctly triggers the error logic.

---

## . Integration Testing

- Goal: Test the `"Middle Layer"` where multiple files talk to each other.
- Target Folders: `./src/services/` and `./src/repository/`
  - `Service` + `Repository`:
    Test `service-add-task.js`.
    In an integration test,
    you actually allow the service to call `read.js` and `write.js`.

  - The Test:
    You run the service,
    and then check if `data/tasks.json` was actually updated.
    You are testing the communication between `the Business Logic and the Database`.

  - Repository Logic:
    Test that `write.js` handles a missing `data/` directory by creating it.

---

## 3. End-to-End (E2E) Testing

- Goal: Test the application exactly how a human would use it in the terminal.

- Target: The whole CLI via `./bin/task-cli.js`
  - The CLI Flow:
    You write a script (using a tool like `execa` or a `shell script`)
    that runs the command:

    ```bash
    task-cli add "New Task"
    ```

  - The Validation: The test checks:
    1. Was the Exit Code 0?
    1. Did the terminal output contain "Task Added Successfully"?
    1. Does `tasks.json` now contain that specific string?

---

## Summary Table for your Project

| Test Type   | Primary Target         | What is being checked?                                   |
| ----------- | ---------------------- | -------------------------------------------------------- |
| Unit        | "utils/, middlewares/" | "Pure logic, math, and string manipulation."             |
| Integration | services/              | Does the service correctly save/load via the repository? |
| E2E         | bin/task-cli.js        | Does the final command work from the user's perspective? |
