import { taskRepository } from "../repository/task-repository.js";
import { TaskModel } from "../models/Task-Model.js";
import { generateId } from "../utils/services/auto-increment-id.js";

export const serviceAddTask = async (desc) => {
  try {
    const tasks = await taskRepository.findAll();

    const nextId = generateId(tasks);
    const newTask = new TaskModel(nextId, desc);

    tasks.push(newTask);

    await taskRepository.saveAll(tasks);

    return newTask;
  } catch (error) {
    throw error;
  }
};
