This is the perfect next step, Nabil. The "Race Condition" is the final boss of testing file-based applications. When you run 100 tests in parallel, they all try to open, write, and close `tasks.test.json` at the exact same millisecond, and the file system usually crashes or data gets corrupted.

To learn how to handle this, we are going to use two strategies: **Sequential Execution** and **Unique Test Databases.**

---

### Phase 1: The "Parallel" Trap

First, we need to create a situation where things break so you can see the error. We will create 3 different test files that all try to write to `tasks.test.json` at the same time.

#### 1. The Service (The Target)

Let's assume a simple service that writes to the DB:

```javascript
// src/services/task-service.js
import { writeFile } from "node:fs/promises";
import { FULL_PATH } from "../repository/db-config.js";

export const saveTask = async (task) => {
  // Simulating a small delay to make the race condition easier to trigger
  await new Promise((res) => setTimeout(res, 10));
  await writeFile(FULL_PATH, JSON.stringify(task));
};
```

#### 2. The Chaos Tests

I want you to create 3 identical files: `test-a.test.js`, `test-b.test.js`, and `test-c.test.js`.

**In each file, put this:**

```javascript
import { it, expect } from "vitest";
import { saveTask } from "../../src/services/task-service.js";
import { readFile } from "node:fs/promises";
import { FULL_PATH } from "../../src/repository/db-config.js";

it("should write to the shared file without crashing", async () => {
  const myData = { id: Math.random(), name: "Parallel Test" };
  await saveTask(myData);

  const content = JSON.parse(await readFile(FULL_PATH, "utf-8"));
  expect(content.name).toBe("Parallel Test");
});
```

---

### Phase 2: How to Solve It

#### Solution 1: The "Lazy" Way (Sequential)

If you don't want to change your code, you tell Vitest: "Hey, don't run these together. Wait for one to finish before starting the next."

In your `package.json`:

```json
"scripts": {
  "test": "vitest run --poolOptions.threads.singleThread"
}
```

- **Pros:** Easy. No code changes.
- **Cons:** Very slow when you have 500 tests.

#### Solution 2: The "Pro" Way (Unique DBs per Test)

Instead of every test using `tasks.test.json`, we give every test file its **own** database name based on a unique ID. This is how big companies like Google or Meta test.

**Let's refactor your `db-config.js` to support "Isolation":**

```javascript
import path from "path";

const isTest = process.env.NODE_ENV === "test";

// VITEST_POOL_ID is a unique number Vitest gives to every test worker
const workerId = process.env.VITEST_POOL_ID || "default";

export const DATA_FOLDER = "data";
export const DB_FILE = isTest
  ? `tasks.test.${workerId}.json` // Every worker gets its own file!
  : "tasks.json";

export const FULL_PATH = path.resolve(DATA_FOLDER, DB_FILE);
```

---

### Your First Task

1. Setup the `db-config.js` with the `workerId` logic above.
2. Create those 3 test files.
3. Run `npx vitest`.

**Check your `data/` folder.** You should see multiple files like `tasks.test.1.json`, `tasks.test.2.json`, etc. This is called **Test Isolation**.

Does your `db-config.js` look ready to handle multiple workers?
