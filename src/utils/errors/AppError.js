export class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.date = new Date();
  }
}
