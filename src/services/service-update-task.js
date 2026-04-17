import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { updateTaskInArray } from "../utils/services/update-task-in-array.js";
import { getLocalTime } from "../utils/date/get-local-time.js";
// 1. Import the dynamic names
import { DATA_FOLDER, DB_FILE } from "../repository/db-config.js";

// const path = "data";
// const file = "tasks.json";

export const serviceUpdateTask = async (id, newDescription) => {
  try {
    const tasks = (await read(DATA_FOLDER, DB_FILE)) || [];

    const updatedTask = updateTaskInArray(tasks, {
      id: Number(id),
      description: newDescription,
      updatedAt: getLocalTime(),
    });

    await write(DATA_FOLDER, DB_FILE, tasks);

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
