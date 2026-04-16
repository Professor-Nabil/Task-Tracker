import { colors } from "../utils/cli/colors.js"; // Using that utility we talked about!

export const viewListTasks = (tasks, filter) => {
  console.log(
    `\n ${colors.bold("TASKS LIST")} ${filter ? `(${filter.toUpperCase()})` : "(ALL)"}`,
  );
  console.log(` ──────────────────────────────────────────`);

  if (tasks.length === 0) {
    console.log(`  No tasks found.`);
  }

  tasks.forEach((task) => {
    let statusColor = colors.red; // default for not-done
    if (task.status === "done") statusColor = colors.green;
    if (task.status === "in-progress") statusColor = colors.yellow;

    console.log(
      ` ${colors.dim(task.id + ".")} [${statusColor(task.status)}] ${task.description}`,
    );
  });

  console.log(` ──────────────────────────────────────────\n`);
};
