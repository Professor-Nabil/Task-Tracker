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

const write = async (obj) => {
  try {
    await fs.writeFile("./database.json", JSON.stringify(obj));
  } catch (err) {
    console.error(err);
  }
};

const read = async () => {
  try {
    const checkFile = await checksFileExists();

    if (checkFile === "File exists") {
      const database = await fs.readFile("./database.json");
      return JSON.parse(database);
    } else if (checkFile === "File not exists") {
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};

export default { read, write };
