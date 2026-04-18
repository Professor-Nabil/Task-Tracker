import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { routesCommandsInputs } from "../../src/routes/router-commands-inputs.js";
import { FULL_PATH } from "../../src/repository/db-config.js";

describe("E2E: Add Task Command", () => {
  beforeEach(async () => {
    // 1. Prepare a clean test database
    await writeFile(FULL_PATH, JSON.stringify([]));

    // 2. Mock console.log so it doesn't clutter your terminal during tests
    // vi.spyOn "watches" the function and lets us see what was sent to it
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    // 3. Clean up
    vi.restoreAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("should print a green success message when a task is added", async () => {
    const taskName = "E2E Test Task";

    // Act: We call the router directly with the user's input
    await routesCommandsInputs(["add", taskName]);

    // Assert: We check the "Spy" to see what was printed
    // console.log.mock.calls returns an array of every time log was called
    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    // We check for the checkmark and the text
    expect(allOutput).toContain("✔ Success");
    expect(allOutput).toContain("Task added!");
    expect(allOutput).toContain(`Desc: ${taskName}`);
    expect(allOutput).toContain("ID:   1");
  });
});
