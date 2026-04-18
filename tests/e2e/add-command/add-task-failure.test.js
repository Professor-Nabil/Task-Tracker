import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { routesCommandsInputs } from "../../../src/routes/router-commands-inputs.js";

describe("E2E: Add Task Failure", () => {
  beforeEach(() => {
    // Spy on console.error to catch validation messages
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should show an error message if the description is missing", async () => {
    // 1. Simulate: user typed 'add' but nothing else
    const mockInputs = ["add", undefined];

    // 2. Act
    await routesCommandsInputs(mockInputs);

    // 3. Assert
    const errorOutput = console.error.mock.calls
      .map((call) => call[0])
      .join(" ");

    // We expect the middleware to have thrown a validation error
    expect(errorOutput.toLowerCase()).toContain("error");
    expect(errorOutput.toLowerCase()).toContain("description");
  });
});
