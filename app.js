#!/usr/bin/env node

import { Task } from "./task-class.js";
const args = process.argv.slice(2);
const firstArg = args[0];
const secondArg = args[1];
const thirdArg = args[2];

switch (firstArg) {
  case "add":
    new Task(secondArg);
    break;
  case "update":
    Task.update(+secondArg, thirdArg);
    break;
  case "delete":
    Task.delete(+secondArg);
    break;
  case "mark":
    Task.mark(+secondArg, thirdArg);
    break;
  case "list":
    switch (secondArg) {
      case "done":
        break;
      case "not-done":
        break;
      case "in-progress":
        break;
      default:
        if (thirdArg == null) {
        } else {
        }
        break;
    }
    break;
  default:
    break;
}
