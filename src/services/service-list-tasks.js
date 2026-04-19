import { taskRepository } from "../repository/task-repository.js";

export const serviceListTasks = async (statusFilter = null) => {
  try {
    const tasks = await taskRepository.findAll();

    if (!statusFilter) {
      return tasks;
    }

    return tasks.filter((task) => task.status === statusFilter);
  } catch (error) {
    throw error;
  }
};
