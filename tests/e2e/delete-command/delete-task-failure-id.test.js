import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("Delete failure ID", () => {
  beforeEach(async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(async () => {
    vi.restoreAllMocks();
  });

  it("Should fail if id not found", async () => {
    await routesCommandsInputs(["delete", 999]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("id");
    expect(errLog.toLowerCase()).toContain("not");
    expect(errLog.toLowerCase()).toContain("found");
    expect(errLog.toLowerCase()).toContain("999");
  });

  it("Should fail if id not number", async () => {
    await routesCommandsInputs(["delete", "abc"]);

    const errLog = console.error.mock.calls.map((call) => call[0]).join(" ");

    expect(errLog.toLowerCase()).toContain("error");
    expect(errLog.toLowerCase()).toContain("id");
    expect(errLog.toLowerCase()).toContain("number");
  });
});
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Cannot delete. Task ID not found (ID: 999)
 ──────────────────────────────────────────
 */
/*
 󰅚 Error
 ──────────────────────────────────────────
 ERROR: Id must be a number
 ──────────────────────────────────────────
 */
