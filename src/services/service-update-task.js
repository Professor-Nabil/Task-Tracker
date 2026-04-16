import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { updateTaskInArray } from "../utils/services/update-task-in-array.js";

const path = "data";
const file = "tasks.json";

export const serviceUpdateTask = async (id, newDescription) => {
  try {
    const tasks = (await read(path, file)) || [];

    // const index = tasks.findIndex((e) => e.id === id);
    // if (index < 0) { return null; }
    // tasks[index].description = newDescription;
    // tasks[index].updatedAt = new Date().toISOString();

    const updatedTask = updateTaskInArray(tasks, {
      id: Number(id),
      description: newDescription,
      updatedAt: new Date().toISOString(),
    });

    await write(path, file, tasks);

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
