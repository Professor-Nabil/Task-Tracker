class Task {
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
    console.log(`Task added successfully (ID: ${this.id})`);
    Task.#Tasks.push({
      id: this.#id,
      description: this.#description,
      status: this.#status,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
    });
  }


  static update(id, description) {
    let taskIndex = Task.#Tasks.findIndex((e) => e.id === id);
    Task.#Tasks[taskIndex].description = description;
    console.log(`Task updated successfully (ID: ${id})`);
  }
}

new Task("task 1");
new Task("task 2");
Task.update(2, "this is new description");
