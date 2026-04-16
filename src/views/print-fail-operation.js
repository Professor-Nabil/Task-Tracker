export const printFailOperation = (msg) => {
  const RED = "\x1b[31m";
  const BOLD = "\x1b[1m";
  const RESET = "\x1b[0m";

  // Using a clean layout with a vertical bar
  console.error(`\n ${RED}${BOLD}󰅚 Error${RESET}`);
  console.error(` ──────────────────────────────────────────`);
  console.error(` ${msg}`);
  console.error(` ──────────────────────────────────────────\n`);
};
