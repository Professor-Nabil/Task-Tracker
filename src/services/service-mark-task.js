import { taskRepository } from "../repository/task-repository.js";
import { updateTaskInArray } from "../utils/services/update-task-in-array.js";

export const serviceMarkTask = async (id, status) => {
  try {
    const tasks = await taskRepository.findAll();

    const updatedTask = updateTaskInArray(tasks, {
      id: Number(id),
      status: status,
      updatedAt: new Date().toISOString(),
    });

    if (!updatedTask) return null;

    await taskRepository.saveAll(tasks);

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
