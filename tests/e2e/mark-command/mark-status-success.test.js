import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { FULL_PATH } from "../../../src/repository/db-config.js";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("Mark status Happy Path:", () => {
  beforeEach(async () => {
    const mockTasks = [
      {
        id: 1,
        description: "Task 1",
        status: "not-done",
        updatedAt: "2026-04-19T11:05:51.363Z",
        createdAt: "2026-04-19T11:05:51.362Z",
      },
    ];
    await writeFile(FULL_PATH, JSON.stringify(mockTasks));
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.resetAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("Should success if status 'done' and 'id' found", async () => {
    await routesCommandsInputs(["mark", 1, "done"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput.toLowerCase()).toContain("success");
    expect(allOutput.toLowerCase()).toContain("done");
    expect(allOutput.toLowerCase()).toContain("id:      1");
  });

  it("Should success if status 'in-progress' and 'id' found", async () => {
    await routesCommandsInputs(["mark", 1, "in-progress"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput.toLowerCase()).toContain("success");
    expect(allOutput.toLowerCase()).toContain("in-progress");
    expect(allOutput.toLowerCase()).toContain("id:      1");
  });

  it("Should success if status 'not-done' and 'id' found", async () => {
    await routesCommandsInputs(["mark", 1, "not-done"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput.toLowerCase()).toContain("success");
    expect(allOutput.toLowerCase()).toContain("not-done");
    expect(allOutput.toLowerCase()).toContain("id:      1");
  });
});
/*
✔ Success: Task marked as DONE!
ID:      1
Desc:    Task 1
Status:  done
Created: 19 Apr 2026, 12:05
Updated: 19 Apr 2026, 12:19
----------------------------

✔ Success: Task marked as IN-PROGRESS!
ID:      1
Desc:    Task 1
Status:  in-progress
Created: 19 Apr 2026, 12:05
Updated: 19 Apr 2026, 12:19
----------------------------

✔ Success: Task marked as NOT-DONE!
ID:      1
Desc:    Task 1
Status:  not-done
Created: 19 Apr 2026, 12:05
Updated: 19 Apr 2026, 12:19
----------------------------
 */
