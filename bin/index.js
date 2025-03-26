#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import clear from "clear";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import open from "open";

clear();

console.log(
    gradient.pastel.multiline(figlet.textSync("Eliteverse", { horizontalLayout: "full" }))
);

const bio = boxen(
    chalk.whiteBright(`
Hi! I'm Ram Kumar
A second-year engineering student specializing in frontend development and data science.
Passionate about learning new skills and writing clean, professional code.

${chalk.green.bold("GitHub:")} ${chalk.blueBright("https://github.com/Rxm46")}
${chalk.green.bold("LinkedIn:")} ${chalk.blueBright("www.linkedin.com/in/ramkumar46")}
${chalk.green.bold("Portfolio (Available soon..!):")} ${chalk.greenBright("http://localhost:3000")}
${chalk.green.bold("Instagram:")} ${chalk.cyan("www.instagram.com/raahhmm__?igsh=MWZ4M2JkN3JkOGRj")}
`),
    {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "gray",
    }
);

console.log(bio);

console.log(
    chalk.yellow("💡 Suggestion: Try using ") +
    chalk.blue("cmd/ctrl + click") +
    chalk.yellow(" on the links above to open/copy")
);

inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: [
        { name: "📧 Send me an email?", value: "email" },
        { name: "❌ Just quit!", value: "quit" },
      ],
    },
  ])
  .then((answers) => {
    if (answers.action === "email") {
      console.log(
        "\n✅ Done, your email client should open soon.\nI'll keep an eye out for your message! 👀"
      );
      open("mailto:ramvj2005@gmail.com");
    } else if (answers.action === "quit") {
      console.log(
        "\n👋 Thanks for stopping by.\nIf you ever decide to return, feel free to reach out.\nHave a great day! 🎉"
      );
    }
  });

