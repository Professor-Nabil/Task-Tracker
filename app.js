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


}

new Task("task 1");
new Task("task 2");
