import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { deleteTaskFromArray } from "../utils/services/delete-task-from-array.js";
// 1. Import the dynamic names
import { DATA_FOLDER, DB_FILE } from "../repository/db-config.js";

// const path = "data";
// const file = "tasks.json";

export const serviceDeleteTask = async (id) => {
  try {
    const tasks = (await read(DATA_FOLDER, DB_FILE)) || [];

    // Use the utility to remove the task from the array in memory
    const deletedTask = deleteTaskFromArray(tasks, Number(id));

    // If the utility returned null, the ID didn't exist
    if (!deletedTask) return null;

    // Save the new array (minus the deleted task) back to disk
    await write(DATA_FOLDER, DB_FILE, tasks);

    return deletedTask;
  } catch (error) {
    throw error;
  }
};
