import { read } from "./read.js";
import { write } from "./write.js";
import { DATA_FOLDER, DB_FILE } from "./db-config.js";

export const taskRepository = {
  async findAll() {
    return (await read(DATA_FOLDER, DB_FILE)) || [];
  },

  async saveAll(tasks) {
    return await write(DATA_FOLDER, DB_FILE, tasks);
  },
};
