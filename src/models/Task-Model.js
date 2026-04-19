export class TaskModel {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = "not-done";
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}
