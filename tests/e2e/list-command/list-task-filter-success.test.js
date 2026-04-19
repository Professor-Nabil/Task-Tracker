import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { writeFile, unlink } from "node:fs/promises";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";
import { FULL_PATH } from "../../../src/repository/db-config.js";

describe("List Task Filter Happy Path:", () => {
  beforeEach(async () => {
    const mockData = [
      { id: 1, description: "Task 1", status: "not-done" },
      { id: 2, description: "Task 2", status: "not-done" },
      { id: 3, description: "Task 3", status: "done" },
      { id: 4, description: "Task 4", status: "done" },
      { id: 5, description: "Task 5", status: "in-progress" },
      { id: 6, description: "Task 6", status: "in-progress" },
    ];
    await writeFile(FULL_PATH, JSON.stringify(mockData));

    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    try {
      await unlink(FULL_PATH);
    } catch (e) {}
  });

  it("Should success if we have tasks with status not-done", async () => {
    await routesCommandsInputs(["list", "not-done"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput).toContain("not-done");
    expect(allOutput).toContain("Task 1");
    expect(allOutput).toContain("Task 2");
    expect(allOutput).not.toContain("Task 3");
    expect(allOutput).not.toContain("Task 4");
    expect(allOutput).not.toContain("Task 5");
    expect(allOutput).not.toContain("Task 6");
  });

  it("Should success if we have tasks with status done", async () => {
    await routesCommandsInputs(["list", "done"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput).toContain("done");
    expect(allOutput).not.toContain("Task 1");
    expect(allOutput).not.toContain("Task 2");
    expect(allOutput).toContain("Task 3");
    expect(allOutput).toContain("Task 4");
    expect(allOutput).not.toContain("Task 5");
    expect(allOutput).not.toContain("Task 6");
  });

  it("Should success if we have tasks with status in-progress", async () => {
    await routesCommandsInputs(["list", "in-progress"]);

    const allOutput = console.log.mock.calls.map((call) => call[0]).join("\n");

    expect(allOutput).toContain("in-progress");
    expect(allOutput).not.toContain("Task 1");
    expect(allOutput).not.toContain("Task 2");
    expect(allOutput).not.toContain("Task 3");
    expect(allOutput).not.toContain("Task 4");
    expect(allOutput).toContain("Task 5");
    expect(allOutput).toContain("Task 6");
  });
});
/*
 TASKS LIST (NOT-DONE)
 ──────────────────────────────────────────
 1. [not-done] Task 1
 2. [not-done] Task 2
 ──────────────────────────────────────────
 */
/*
 TASKS LIST (DONE)
 ──────────────────────────────────────────
 3. [done] Task 3
 4. [done] Task 4
 ──────────────────────────────────────────
 */
/*
 TASKS LIST (IN-PROGRESS)
 ──────────────────────────────────────────
 5. [in-progress] Task 5
 6. [in-progress] Task 6
 ──────────────────────────────────────────
 */
