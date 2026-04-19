import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("List all Task Sad Path:", () => {
  beforeEach(async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
  });

  it("Should failure if all list is empty", async () => {
    await routesCommandsInputs(["list"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput).toContain("No tasks found");
  });
});
/*
TASKS LIST (ALL)
──────────────────────────────────────────
 No tasks found.
──────────────────────────────────────────
*/
