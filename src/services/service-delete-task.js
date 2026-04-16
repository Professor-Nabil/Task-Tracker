import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { deleteTaskFromArray } from "../utils/services/delete-task-from-array.js";

const path = "data";
const file = "tasks.json";

export const serviceDeleteTask = async (id) => {
  try {
    const tasks = (await read(path, file)) || [];

    // Use the utility to remove the task from the array in memory
    const deletedTask = deleteTaskFromArray(tasks, Number(id));

    // If the utility returned null, the ID didn't exist
    if (!deletedTask) return null;

    // Save the new array (minus the deleted task) back to disk
    await write(path, file, tasks);

    return deletedTask;
  } catch (error) {
    throw error;
  }
};
