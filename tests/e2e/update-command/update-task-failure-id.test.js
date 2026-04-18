import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("Update failure ID", () => {
  beforeEach(async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(async () => {
    vi.restoreAllMocks();
  });

  it("Should fail if id not found", async () => {
    await routesCommandsInputs(["update", 999, "Task 999"]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("(id: 999)");
  });

  it("Should fail if id not number", async () => {
    await routesCommandsInputs(["update", "abc", "Task 999"]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
  });
});
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Task id not found (ID: 999)
 ──────────────────────────────────────────
*/
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Id must be a number
 ──────────────────────────────────────────
*/
