import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("Unknown Commands and Halp page", () => {
  beforeEach(async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(async () => {
    vi.restoreAllMocks();
  });

  it("Should print help page if no arguments pass at all", async () => {
    await routesCommandsInputs([]);
    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");
    expect(allOutput.toLowerCase()).toContain("available commands");
    expect(allOutput.toLowerCase()).toContain("usage:");
    expect(allOutput.toLowerCase()).toContain("add");
    expect(allOutput.toLowerCase()).toContain("list");
    expect(allOutput.toLowerCase()).toContain("update");
    expect(allOutput.toLowerCase()).toContain("delete");
    expect(allOutput.toLowerCase()).toContain("mark");
  });

  it("Should print help page if Unknown arguments pass", async () => {
    await routesCommandsInputs(["blablabla"]);
    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");
    expect(allOutput.toLowerCase()).toContain("available commands");
    expect(allOutput.toLowerCase()).toContain("usage:");
    expect(allOutput.toLowerCase()).toContain("add");
    expect(allOutput.toLowerCase()).toContain("list");
    expect(allOutput.toLowerCase()).toContain("update");
    expect(allOutput.toLowerCase()).toContain("delete");
    expect(allOutput.toLowerCase()).toContain("mark");
  });
});
/*
 Task-Tracker CLI v1.0
 Usage: task-cli <command> [arguments]

 AVAILABLE COMMANDS:
 ──────────────────────────────────────────
  add          Create a new task
               ex: add "Buy bread"

  list         Show tasks (optional: done, in-progress, not-done)
               ex: list [status]

  update       Change a task's text
               ex: update <id> "new description"

  delete       Remove a task forever
               ex: delete <id>

  mark         Change status (done, in-progress, not-done)
               ex: mark <id> <status>

 ──────────────────────────────────────────
 ! NOTE: <id> must be a positive integer.
*/
