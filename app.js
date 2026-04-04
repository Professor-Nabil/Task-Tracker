export class Task {
  #id;
  #description;
  #status;
  #createdAt;
  #updatedAt;

  static #Tasks = [];
  static #autoIncrement = 0;

  constructor(description) {
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
    console.log(Task.#Tasks);
  }

  static get listDone() {
    const taskDone = Task.#Tasks.filter((e) => e.status === "done");
    console.log(taskDone);
  }

  static get listNotDone() {
    const taskDone = Task.#Tasks.filter((e) => e.status !== "done");
    console.log(taskDone);
  }

  static get listInProgress() {
    const taskDone = Task.#Tasks.filter((e) => e.status === "in-progress");
    console.log(taskDone);
  }

  static update(id, description) {
    Task.#Tasks.filter((e) => {
      if (e.id === id) {
        e.description = description;
        e.updatedAt = new Date();
        console.log(`Task updated successfully (ID: ${id})`);
      }
    });
  }

  static delete(id) {
    Task.#Tasks = Task.#Tasks.filter((e) => e.id !== id);
    console.log(`Task deleted successfully (ID: ${id})`);
  }

  static mark(id, status) {
    Task.#Tasks.filter((e) => {
      if (e.id === id) {
        e.status = status;
      }
    });
  }
}
