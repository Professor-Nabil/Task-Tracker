import { taskRepository } from "../repository/task-repository.js";
import { deleteTaskFromArray } from "../utils/services/delete-task-from-array.js";

export const serviceDeleteTask = async (id) => {
  try {
    const tasks = await taskRepository.findAll();

    const deletedTask = deleteTaskFromArray(tasks, Number(id));

    if (!deletedTask) return null;

    await taskRepository.saveAll(tasks);

    return deletedTask;
  } catch (error) {
    throw error;
  }
};
