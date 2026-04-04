import { Task } from "./task-class.js";

const args = process.argv.slice(2);
const firstArg = args[0];
const secondArg = args[1];

switch (firstArg) {
  case "add":
    addTask(secondArg);
    break;
  case "update":
    console.log("update");
    break;
  case "delete":
    console.log("delete");
    break;
  case "mark":
    console.log("mark");
    break;
  case "list":
    console.log("list");
    break;
  default:
    // console.log("Error");
    break;
}

function addTask(description) {
  try {
    new Task(description);
  } catch (err) {
    console.error(err.message);
  }
}

Task.list();
