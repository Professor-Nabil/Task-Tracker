export class TaskModel {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = "todo";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
