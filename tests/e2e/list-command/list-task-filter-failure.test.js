import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("List Task Filter Sad Path:", () => {
  beforeEach(async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
  });

  it("Should failure if no not-done taks status found", async () => {
    await routesCommandsInputs(["list", "not-done"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput.toLowerCase()).toContain("(not-done)");
    expect(allOutput.toLowerCase()).not.toContain("(done)");
    expect(allOutput.toLowerCase()).not.toContain("(in-progress)");
    expect(allOutput.toLowerCase()).toContain("no");
    expect(allOutput.toLowerCase()).toContain("tasks");
    expect(allOutput.toLowerCase()).toContain("found");
  });

  it("Should failure if no done taks status found", async () => {
    await routesCommandsInputs(["list", "done"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput.toLowerCase()).not.toContain("(not-done)");
    expect(allOutput.toLowerCase()).toContain("(done)");
    expect(allOutput.toLowerCase()).not.toContain("(in-progress)");
    expect(allOutput.toLowerCase()).toContain("no");
    expect(allOutput.toLowerCase()).toContain("tasks");
    expect(allOutput.toLowerCase()).toContain("found");
  });

  it("Should failure if no in-progress taks status found", async () => {
    await routesCommandsInputs(["list", "in-progress"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput.toLowerCase()).not.toContain("(not-done)");
    expect(allOutput.toLowerCase()).not.toContain("(done)");
    expect(allOutput.toLowerCase()).toContain("(in-progress)");
    expect(allOutput.toLowerCase()).toContain("no");
    expect(allOutput.toLowerCase()).toContain("tasks");
    expect(allOutput.toLowerCase()).toContain("found");
  });
});
/*
 TASKS LIST (NOT-DONE)
 ──────────────────────────────────────────
  No tasks found.
 ──────────────────────────────────────────
 */
/*
 TASKS LIST (DONE)
 ──────────────────────────────────────────
  No tasks found.
 ──────────────────────────────────────────
 */
/*
 TASKS LIST (IN-PROGRESS)
 ──────────────────────────────────────────
  No tasks found.
 ──────────────────────────────────────────
 */
