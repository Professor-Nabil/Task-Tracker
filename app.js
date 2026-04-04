export class Task {
  #id;
  #description;
  #status;
  #createdAt;
  #updatedAt;

  static #Tasks = [];
  static #autoIncrement = 0;

  constructor(description = "Empty Task") {
    Task.#autoIncrement++;
    this.#id = Task.#autoIncrement;
    this.#description = description;
    this.#status = "todo";
    this.#createdAt = new Date();
    this.#updatedAt = new Date();
    console.log(`Task added successfully (ID: ${this.#id})`);
    Task.#Tasks.push({
      id: this.#id,
      description: this.#description,
      status: this.#status,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
    });
  }

  static get list() {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      console.log(Task.#Tasks);
    } catch (err) {
      console.error(err.message);
    }
  }

  static get listDone() {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const taskDone = Task.#Tasks.filter((e) => e.status === "done");
      if (taskDone.length <= 0) {
        console.log(`No "task done" found`);
      } else {
        console.log(taskDone);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  static get listNotDone() {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const taskDone = Task.#Tasks.filter((e) => e.status !== "done");
      if (taskDone.length <= 0) {
        console.log(`No "finish task" found`);
      } else {
        console.log(taskDone);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  static get listInProgress() {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const taskDone = Task.#Tasks.filter((e) => e.status === "in-progress");
      console.log(taskDone);
    } catch (err) {
      console.error(err.message);
    }
  }

  static update(id, description) {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const findTask = Task.#Tasks.findIndex((e) => e.id === id);
      if (findTask < 0) {
        throw new Error(`Error: Task not found with (ID: ${id})`);
      }
      if (!description) {
        throw new Error(`Error: Description is empty (ID: ${id})`);
      }
      Task.#Tasks.filter((e) => {
        if (e.id === id) {
          e.description = description;
          e.updatedAt = new Date();
          console.log(`Task updated successfully (ID: ${id})`);
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  static delete(id) {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const findTask = Task.#Tasks.findIndex((e) => e.id === id);
      if (findTask < 0) {
        throw new Error(`Error: Task not found with (ID: ${id})`);
      }
      Task.#Tasks = Task.#Tasks.filter((e) => e.id !== id);
      console.log(`Task deleted successfully (ID: ${id})`);
    } catch (err) {
      console.error(err.message);
    }
  }

  static mark(id, status) {
    try {
      if (Task.#Tasks.length <= 0) {
        throw new Error("Error: List is empty");
      }
      const findTask = Task.#Tasks.findIndex((e) => e.id === id);
      if (findTask < 0) {
        throw new Error(`Error: Task not found with (ID: ${id})`);
      }
      if (status !== "done" && status !== "in-progress" && status !== "todo") {
        throw new Error(
          `Error: Task status must be ("done" or "in-progress" or "todo")`,
        );
      }
      Task.#Tasks.filter((e) => {
        if (e.id === id) {
          e.status = status;
          console.log(
            `Task status changed successfully (ID: ${id}) (status: ${status})`,
          );
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }
}
