import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { updateTaskInArray } from "../utils/services/update-task-in-array.js";
import { getLocalTime } from "../utils/date/get-local-time.js";
// 1. Import the dynamic names
import { DATA_FOLDER, DB_FILE } from "../repository/db-config.js";

// const path = "data";
// const file = "tasks.json";

export const serviceMarkTask = async (id, status) => {
  try {
    const tasks = (await read(DATA_FOLDER, DB_FILE)) || [];

    // We reuse the utility!
    // We pass the ID, the new status, and the new timestamp.
    const updatedTask = updateTaskInArray(tasks, {
      id: Number(id),
      status: status,
      updatedAt: getLocalTime(),
    });

    if (!updatedTask) return null;

    await write(DATA_FOLDER, DB_FILE, tasks);

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
