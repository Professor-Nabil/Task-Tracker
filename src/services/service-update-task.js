import { read } from "../repository/read.js";
import { write } from "../repository/write.js";
import { updateTaskInArray } from "../utils/services/update-task-in-array.js";
import { getLocalTime } from "../utils/date/get-local-time.js";

const path = "data";
const file = "tasks.json";

export const serviceUpdateTask = async (id, newDescription) => {
  try {
    const tasks = (await read(path, file)) || [];

    const updatedTask = updateTaskInArray(tasks, {
      id: Number(id),
      description: newDescription,
      updatedAt: getLocalTime(),
    });

    await write(path, file, tasks);

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
