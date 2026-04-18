import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";
import { FULL_PATH } from "../../../src/repository/db-config.js";

describe("Update failure desc", () => {
  beforeEach(async () => {
    const mockTasks = [
      { id: 1, description: "Task 1" },
      { id: 2, description: "Task 2" },
    ];
    await writeFile(FULL_PATH, JSON.stringify(mockTasks));
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("Should fail if description is empty", async () => {
    await routesCommandsInputs(["update", 1, ""]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("description");
    expect(errLog.toLowerCase()).toContain("empty");
  });

  it("Should fail if description is whitespace", async () => {
    await routesCommandsInputs(["update", 1, "      "]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("not");
    expect(errLog.toLowerCase()).toContain("whitespace");
  });
});
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Description argument is empty
 ──────────────────────────────────────────
 */
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Description argument must be not whitespace "       "
 ──────────────────────────────────────────
 */
