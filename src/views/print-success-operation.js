// export const printSuccessOperition = (msg) => {
//   console.log(msg);
// }
export const printSuccessOperition = (task, msg) => {
  console.log(`\x1b[32m✔ Success:\x1b[0m ${msg}`);
  console.log(`ID:   ${task.id}`);
  console.log(`Desc: ${task.description}`);
  console.log(`Status: ${task.status}`);
  console.log(`----------------------------`);
};
