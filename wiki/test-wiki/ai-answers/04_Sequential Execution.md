> [!WARNING]
> `msg from Nabil`: This don't works for me i don't know why

### 🛠️ The Professional Solution: Sequential Execution

In integration tests that touch a global resource (like a single JSON file),
you often need to tell the test runner:
**"Do not run these at the same time. Run them one by one."**

#### Option 1: The `--sequence.concurrent=false` Flag

You can run your tests in a "line" instead of all at once.
Try running your test command like this:

```bash
npx vitest run --sequence.concurrent=false
```

This forces Vitest to finish one test file completely
before starting the next one.

#### Option 2: The `describe.sequential` block

If you only want to force order within one file,
you can change your code to:

```javascript
describe.sequential("serviceListTasks Service", () => {
  // All tests inside here will now run one-by-one
});
```
