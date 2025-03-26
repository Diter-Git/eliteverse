#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import clear from "clear";
import figlet from "figlet";
import gradient from "gradient-string";

// Clear terminal
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
        borderColor: "cyan",
    }
);

console.log(bio);

console.log(
    chalk.yellow("Try using ") +
    chalk.blue("cmd/ctrl + click") +
    chalk.yellow(" on the links above to open them.")
);
