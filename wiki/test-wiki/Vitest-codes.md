```js
// ============================================================================
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ============================================================================
vi.spyOn(console, "log").mockImplementation(() => {});
const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");
expect(allOutput).toContain("✔ Success");
expect(allOutput).toContain("Task added!");
expect(allOutput).toContain(`Desc: ${taskName}`);
vi.restoreAllMocks();

// ============================================================================
vi.spyOn(console, "error").mockImplementation(() => {});
const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");
expect(errLog.toLowerCase()).toContain("error");
vi.restoreAllMocks();

// ============================================================================
```
