# Step 1: The E2E "Trap" Strategy

To test your controllers/E2E without crashing Vitest, we must:

1. **Mock `process.exit`**: Stop it from actually closing the process.
2. **Mock `console.log`**: Capture your beautiful colored output to verify it.
3. **Mock `process.argv`**: Inject the commands (like `add`, `"Task 1"`) into the app.

---

### Step 2: Let's see one Controller

To write the first test,
I need to see how the Controller handles the View.
Could you show me `./src/controllers/controller-add.js`?

I want to see if it calls `print-success-operation.js` directly
and what it passes to it.

---

### Step 3: A "Real" E2E Test Mockup

Based on your `app.js`,
here is how we will structure the test for `add`.
We will target the `routesCommandsInputs` directly because it's the "brain" of your CLI.

**`tests/e2e/add-command.test.js`**

```javascript
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { routesCommandsInputs } from "../../src/routes/router-commands-inputs.js";
import { writeFile, unlink } from "node:fs/promises";
import { FULL_PATH } from "../../src/repository/db-config.js";

describe("E2E: Add Command", () => {
  beforeEach(async () => {
    // Clean DB
    await writeFile(FULL_PATH, JSON.stringify([]));

    // Spy on console.log to catch your success message
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("should output success message to terminal when adding a task", async () => {
    // 1. Simulate the input: ['add', 'My First Task']
    const mockInputs = ["add", "My First Task"];

    // 2. Run the router (this triggers controller -> service -> view)
    await routesCommandsInputs(mockInputs);

    // 3. ASSERT: Did the console show the success message?
    // We check if any of the console.log calls contained "Success"
    const calls = console.log.mock.calls.map((call) => call[0]).join(" ");

    expect(calls).toContain("Success");
    expect(calls).toContain("My First Task");
  });
});
```

### 💡 Why this is different from Service testing

- **Service Test:** You checked if the `tasks` array changed.
- **Controller/E2E Test:** You are checking if the **Human** sees the right message.

**Show me `controller-add.js`
and I will show you how to handle the middlewares
(like `validateDescription`) inside these tests!**
