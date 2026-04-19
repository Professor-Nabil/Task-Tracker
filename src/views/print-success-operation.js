// =============================================================
// *** version 1 ***
// export const printSuccessOperition = (msg) => {
//   console.log(msg);
// }
//
// =============================================================
// *** version 2 ***
// export const printSuccessOperition = (task, msg) => {
//   console.log(`\x1b[32m✔ Success:\x1b[0m ${msg}`);
//   console.log(`ID:   ${task.id}`);
//   console.log(`Desc: ${task.description}`);
//   console.log(`Status: ${task.status}`);
//   console.log(`----------------------------`);
// };

// =============================================================
// *** version 3 ***
export const printSuccessOperition = (task, msg) => {
  // Create a formatter for a clean, local look
  const formatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const created = formatter.format(new Date(task.createdAt));
  const updated = formatter.format(new Date(task.updatedAt));

  console.log(`\x1b[32m✔ Success:\x1b[0m ${msg}`);
  console.log(`ID:      ${task.id}`);
  console.log(`Desc:    ${task.description}`);
  console.log(`Status:  ${task.status}`);
  console.log(`Created: ${created}`);
  if (task.createdAt !== task.updatedAt) {
    console.log(`Updated: ${updated}`);
  }
  console.log(`----------------------------`);
};
