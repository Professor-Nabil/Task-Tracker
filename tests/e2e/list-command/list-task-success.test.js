import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";
import { FULL_PATH } from "../../../src/repository/db-config.js";

describe("E2E: List Task Command", () => {
  beforeEach(async () => {
    // 1. Seed the DB with known data
    const mockData = [
      { id: 1, description: "Task One", status: "done" },
      { id: 2, description: "Task Two", status: "not-done" },
    ];
    await writeFile(FULL_PATH, JSON.stringify(mockData));

    // 2. Spy on console.log
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("should display all tasks in the terminal when 'list' is called", async () => {
    // Act
    await routesCommandsInputs(["list"]);

    // Assert
    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput).toContain("Task One");
    expect(allOutput).toContain("done");
    expect(allOutput).toContain("Task Two");
    expect(allOutput).toContain("not-done");
  });
});
