import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { TaskModel } from "../models/Task-Model.js";
import { generateId } from "../utils/services/auto-increment-id.js";

const path = "data";
const file = "tasks.json";

export const serviceAddTask = async (desc) => {
  try {
    // 1. Get current data
    const tasks = (await read(path, file)) || [];

    // 2. Use our Pure Utility to get the next ID
    const nextId = generateId(tasks);

    // 3. Create the "Bones" using your Task Model
    const newTask = new TaskModel(nextId, desc);

    // 4. Update the list
    tasks.push(newTask);

    // 5. Save back to repository
    await write(path, file, tasks);

    return newTask; // Return the object, let the controller decide what to print
  } catch (error) {
    // We THROW so the Controller knows something went wrong
    throw error;
  }
};
