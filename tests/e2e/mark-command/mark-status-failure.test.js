import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { FULL_PATH } from "../../../src/repository/db-config.js";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("Mark status Failure Path:", () => {
  beforeEach(async () => {
    const mockTasks = [{ id: 1, description: "Task 1", status: "not-done" }];
    await writeFile(FULL_PATH, JSON.stringify(mockTasks));
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.resetAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("Should failure if status is invalide", async () => {
    await routesCommandsInputs(["mark", 1, "any text"]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("any text");
  });

  it("Should failure if id not found", async () => {
    await routesCommandsInputs(["mark", 999, "done"]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("999");
  });
});
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Invalid status "any text". Use: done, in-progress, or not-done
 ──────────────────────────────────────────
 */
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Task ID 999 not found.
 ──────────────────────────────────────────
 */
