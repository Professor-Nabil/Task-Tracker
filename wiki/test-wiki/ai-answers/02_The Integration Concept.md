### 2. The Integration Concept: Step-by-Step

In a **Unit Test**, we test one file.
In an **Integration Test**, we test the "Conversation" between layers.

For your `service-add-task.js`, we want to test:

1. **The Service** (Business logic)
2. **The Model** (Data structure)
3. **The Repository** (Writing to the actual JSON file)

---

### 3. Step 1: Learning "Environment Variables"

To make integration testing work without destroying your `data/tasks.json`,
we use an **Environment Variable**.
This tells the code: "If I'm in TEST mode, use a different file."

**Try this simple experiment in a new folder/project:**

**`db.js`**

```javascript
import path from "path";

// If we are testing, use 'tasks.test.json', otherwise use 'tasks.json'
const fileName =
  process.env.NODE_ENV === "test" ? "tasks.test.json" : "tasks.json";

export const DB_PATH = path.resolve("data", fileName);
```

**`write.js`**

```javascript
import fs from "fs/promises";
import { DB_PATH } from "./db.js";

export const writeData = async (data) => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
};
```

---

### 4. Step 2: The Test Logic

Now, look at how the test "controls" the environment.

**`test-example.test.js`**

```javascript
import { it, expect, beforeEach, afterEach } from "vitest";
import fs from "fs/promises";
import { writeData } from "./write.js";
import { DB_PATH } from "./db.js";

// Note: Vitest automatically sets process.env.NODE_ENV = "test"
// so DB_PATH will point to 'tasks.test.json' automatically!

beforeEach(async () => {
  // Make sure the test starts with an empty file
  await fs.writeFile(DB_PATH, JSON.stringify([]));
});

afterEach(async () => {
  // Cleanup: Remove the fake file after the test
  try {
    await fs.unlink(DB_PATH);
  } catch (e) {}
});

it("should write data to the test file specifically", async () => {
  const myData = [{ id: 1, name: "Nabil" }];

  await writeData(myData);

  const savedData = JSON.parse(await fs.readFile(DB_PATH, "utf-8"));
  expect(savedData[0].name).toBe("Nabil");
  expect(DB_PATH).toContain("tasks.test.json"); // Verification
});
```

### Why do this "Empty Project" first?

Because if you understand how `process.env.NODE_ENV` switches the file path,
you will understand how to test your real `service-add-task.js` without any fear.

**Do you have a separate folder ready to test this "Switching" logic?
Try to get that passing first!**
