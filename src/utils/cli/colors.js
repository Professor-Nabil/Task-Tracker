export const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  dim: (text) => `\x1b[2m${text}\x1b[0m`,
  bold: (text) => `\x1b[1m${text}\x1b[0m`,
};

/* // How to use it
import { colors } from "../utils/cli/colors.js";

export const printFailOperation = (msg) => {
  console.error(`\n${colors.bold(colors.red("✖"))} ${colors.red(msg)}\n`);
};
*/
