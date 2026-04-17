import { read } from "../repository/read.js";
// 1. Import the dynamic names
import { DATA_FOLDER, DB_FILE } from "../repository/db-config.js";

// const path = "data";
// const file = "tasks.json";

export const serviceListTasks = async (statusFilter = null) => {
  try {
    const tasks = (await read(DATA_FOLDER, DB_FILE)) || [];

    // If no filter is provided (task-cli list), return everything
    if (!statusFilter) {
      return tasks;
    }

    // Return only the tasks that match the requested status
    // This covers "done", "in-progress", and "not-done" perfectly
    return tasks.filter((task) => task.status === statusFilter);
  } catch (error) {
    throw error;
  }
};
