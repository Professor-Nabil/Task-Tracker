import { getLocalTime } from "../utils/date/get-local-time.js";
export class TaskModel {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = "not-done";
    this.createdAt = getLocalTime();
    this.updatedAt = getLocalTime();
  }
}
