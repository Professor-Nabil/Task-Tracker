import { colors } from "../utils/cli/colors.js";

export const printHelpPage = (helpData) => {
  const { header, usage, commands, footer } = helpData;

  // 1. Header & Usage (Bold and Underlined style)
  console.log(`\n ${colors.bold(colors.green(header))}`);
  console.log(` ${colors.dim("Usage:")} ${colors.yellow(usage)}\n`);

  console.log(` ${colors.bold("AVAILABLE COMMANDS:")}`);
  console.log(` ${colors.dim("──────────────────────────────────────────")}`);

  // 2. Loop through commands
  commands.forEach((cmd) => {
    // Left-aligned command name in Green
    const name = colors.green(cmd.name.padEnd(12));

    // Description in White
    const description = cmd.description;

    // Example in Dim/Gray
    const example = colors.dim(`ex: ${cmd.example}`);

    console.log(`  ${name} ${description}`);
    console.log(`               ${example}\n`);
  });

  // 3. Footer (Note)
  console.log(` ${colors.dim("──────────────────────────────────────────")}`);
  console.log(` ${colors.yellow("!")} ${colors.dim(footer)}\n`);
};
/*
export const printHelpPage = (helpData) => {
  const { header, usage, commands, footer } = helpData;

  console.log(`\n ${header}`);
  console.log(` Usage: ${usage}\n`);
  console.log(` Commands:`);

  commands.forEach((cmd) => {
    // Left align the command name (15 spaces) for a clean table look
    const name = cmd.name.padEnd(15);
    console.log(`   ${name} ${cmd.description}`);
    console.log(`   ${" ".repeat(15)} Ex: ${cmd.example}`);
    console.log("");
  });

  console.log(` ${footer}\n`);
};
*/
/*
export const printHelpPage = (helpData) => {
  console.log(""); // Top padding

  helpData.forEach((line) => {
    // line is an array like ["add 'description'"], so we take index 0
    const text = line[0];

    // Style the decorators vs the commands
    if (text.includes("=")) {
      console.log(colors.dim(text));
    } else if (text.startsWith("NOTE")) {
      console.log(`${colors.yellow("!")} ${colors.dim(text)}`);
    } else {
      // Highlight the command word
      const words = text.split(" ");
      const command = colors.bold(colors.green(words[0]));
      const rest = words.slice(1).join(" ");
      console.log(`  ${command} ${rest}`);
    }
  });

  console.log(""); // Bottom padding
};
*/
