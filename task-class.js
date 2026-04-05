import db from "./db.js";

export class Task {
  #id;
  #description;
  #status;
  #createdAt;
  #updatedAt;

  constructor(description = "Empty Task") {
    (async () => {
      this.#id = await Task.autoIncrement();
      this.#description = description;
      this.#status = "todo";
      this.#createdAt = new Date();
      this.#updatedAt = new Date();

      console.log(`Task added successfully (ID: ${this.#id})`);

      const obj = {
        id: this.#id,
        description: this.#description,
        status: this.#status,
        createdAt: this.#createdAt,
        updatedAt: this.#updatedAt,
      };

      await Task.add(obj);
    })();
  }

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


  static async update(id, description) {
    try {
      let Tasks = await db.read();
      if (Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const findTask = Tasks.findIndex((e) => e.id === id);
      if (findTask < 0) {
        throw new Error(`Error: Task not found with (ID: ${id})`);
      }
      if (!description) {
        throw new Error(`Error: Description is empty (ID: ${id})`);
      }
      Tasks.filter((e) => {
        if (e.id === id) {
          e.description = description;
          e.updatedAt = new Date();
          console.log(`Task updated successfully (ID: ${id})`);
        }
      });
      await db.write(Tasks);
    } catch (err) {
      console.error(err.message);
    }
  }

}
