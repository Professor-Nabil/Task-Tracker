import { taskRepository } from "../repository/task-repository.js";
import { updateTaskInArray } from "../utils/services/update-task-in-array.js";

export const serviceUpdateTask = async (id, newDescription) => {
  try {
    const tasks = await taskRepository.findAll();

    const updatedTask = updateTaskInArray(tasks, {
      id: Number(id),
      description: newDescription,
      updatedAt: new Date().toISOString(),
    });

    await taskRepository.saveAll(tasks);

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
