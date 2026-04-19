// =============================================================
// Version 1
// import { colors } from "../utils/cli/colors.js"; // Using that utility we talked about!
//
// export const viewListTasks = (tasks, filter) => {
//   console.log(
//     `\n ${colors.bold("TASKS LIST")} ${filter ? `(${filter.toUpperCase()})` : "(ALL)"}`,
//   );
//   console.log(` ──────────────────────────────────────────`);
//
//   if (tasks.length === 0) {
//     console.log(`  No tasks found.`);
//   }
//
//   tasks.forEach((task) => {
//     let statusColor = colors.red; // default for not-done
//     if (task.status === "done") statusColor = colors.green;
//     if (task.status === "in-progress") statusColor = colors.yellow;
//
//     console.log(
//       ` ${colors.dim(task.id + ".")} [${statusColor(task.status)}] ${task.description}`,
//     );
//   });
//
//   console.log(` ──────────────────────────────────────────\n`);
// };

// =============================================================
// Version 1
import { colors } from "../utils/cli/colors.js";

export const viewListTasks = (tasks, filter) => {
  console.log(
    `\n ${colors.bold("TASKS LIST")} ${filter ? `(${filter.toUpperCase()})` : "(ALL)"}`,
  );
  console.log(` ──────────────────────────────────────────`);

  if (tasks.length === 0) {
    console.log(`  No tasks found.`);
  }

  tasks.forEach((task) => {
    let statusColor = colors.red;
    if (task.status === "done") statusColor = colors.green;
    if (task.status === "in-progress") statusColor = colors.yellow;

    // 1. Create a short, subtle date (e.g., "19 Apr")
    const dateObj = new Date(task.createdAt);
    const dateFormatted = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    // 2. Wrap the date in dim color so it doesn't distract the eye
    const dateDisplay = colors.dim(`(${dateFormatted})`);

    console.log(
      ` ${colors.dim(task.id + ".")} [${statusColor(task.status)}] ${task.description} ${dateDisplay}`,
    );
  });

  console.log(` ──────────────────────────────────────────\n`);
};
