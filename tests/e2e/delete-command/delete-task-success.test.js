import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";
import { FULL_PATH } from "../../../src/repository/db-config.js";

describe("Delete task command", () => {
  beforeEach(async () => {
    const mockTasks = [
      {
        id: 1,
        description: "Task 1",
        status: "not-done",
        createdAt: "2026-04-18T12:01:39.678",
        updatedAt: "2026-04-18T12:01:39.678",
      },
      {
        id: 2,
        description: "Task 2",
        status: "not-done",
        createdAt: "2026-04-18T12:02:43.459",
        updatedAt: "2026-04-18T12:02:43.459",
      },
    ];
    await writeFile(FULL_PATH, JSON.stringify(mockTasks));

    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });
  it("Should print delete success with task id", async () => {
    await routesCommandsInputs(["delete", 1]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput).toContain("✔ Success:");
    expect(allOutput).toContain("ID:   1");
    expect(allOutput).toContain("Desc: Task 1");
    expect(allOutput).toContain("Status: not-done");
  });
});
/*
✔ Success: Task Deleted Successfully!
ID:   1
Desc: Task 1
Status: not-done
----------------------------
 */
