import db from "./db.js";

export class Task {
  #id;
  #description;
  #status;
  #createdAt;
  #updatedAt;

  static async autoIncrement() {
    try {
      let Tasks = await db.read();
      let id = 1;
      Tasks.forEach((e) => {
        if (id <= e.id) {
          id = e.id + 1;
        }
      });
      return id;
    } catch (err) {
      console.error(err);
    }
  }
  static async add(obj) {
    try {
      let Tasks = await db.read();
      Tasks.push(obj);
      await db.write(Tasks);
    } catch (err) {
      console.error(err);
    }
  }

}
