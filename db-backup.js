import fs from "node:fs/promises";

const checksFileExists = async () => {
  try {
    await fs.access("./database.json", fs.constants.F_OK);
    return "File exists";
  } catch (err) {
    if (err.code === "ENOENT") {
      return "File not exists";
    } else {
      return err;
    }
  }
};

const createDatabase = async () => {
  const getAllTasks = JSON.stringify(Task.getAllTasks);
  try {
    const checkFile = await checksFileExists();

    if (checkFile === "File exists") {
      const database = await fs.readFile("./database.json");
      Task.setAllTasks = JSON.parse(database);
    } else if (checkFile === "File not exists") {
      await fs.writeFile("./database.json", getAllTasks);
    }
  } catch (err) {
    console.error(err);
  }
};

createDatabase();
