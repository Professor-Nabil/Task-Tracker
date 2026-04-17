#### The "Test Database" Strategy

We don't want our tests to overwrite your real `data/tasks.json`. That would be a disaster!

1. We create a **fake** JSON file for the test (e.g., `data/tasks.test.json`).
2. We tell the Service to use that file.
3. We verify the file content after the service runs.

---

### Let's Test `service-add-task.js`

This test will verify that your `Add Service` actually talks to the `Repository` and creates a task.

**`./tests/integration/services/service-add-task.test.js`**

```javascript
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs/promises";
import path from "path";
import { serviceAddTask } from "../../../src/services/service-add-task.js";

// We need to point the repository to a TEST file, not the REAL one
const TEST_DB_PATH = path.resolve("data/tasks.test.json");

describe("serviceAddTask Integration", () => {
  beforeEach(async () => {
    // Start with a clean, empty array in our test file
    await fs.writeFile(TEST_DB_PATH, JSON.stringify([]));

    // TRICK: We "mock" the path in our repository so it uses our test file
    // Note: You might need to adjust this depending on how your repo imports the path
    vi.mock("../../../src/repository/db-path.js", () => ({
      DB_PATH: path.resolve("data/tasks.test.json"),
    }));
  });

  afterEach(async () => {
    // Cleanup: Delete the test file after tests
    try {
      await fs.unlink(TEST_DB_PATH);
    } catch (e) {
      // ignore if file doesn't exist
    }
  });

  it("should successfully add a task to the JSON file", async () => {
    const description = "Test Integration Task";

    // 1. Run the service
    await serviceAddTask(description);

    // 2. Read the test file directly to see if it worked
    const fileContent = await fs.readFile(TEST_DB_PATH, "utf-8");
    const tasks = JSON.parse(fileContent);

    // 3. Assertions
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe(description);
    expect(tasks[0].status).toBe("not-done");
  });
});
```

### 🧠 Why this is different from Unit Testing

- **Real File System:** We are actually calling `fs.writeFile` and `fs.readFile`.
- **Multiple Layers:** We are testing the `Service` -> `Model` -> `Repository` -> `File System` chain.
- **Stateful:** The order of operations matters here.

**How does your Repository know which file to use?** If you have the file path hardcoded in your `read.js` or `write.js`, we might need to tweak those files slightly to make them "test-friendly" (so we can pass a different path during testing).

**Shall we check your `src/repository/read.js` code?**
