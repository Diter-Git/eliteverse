#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import clear from "clear";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import open from "open";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Fix for ES module paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Clear the terminal
clear();

// Display fancy ASCII title
console.log(
    gradient.pastel.multiline(figlet.textSync("Eliteverse", { horizontalLayout: "full" }))
);

// Display user bio inside a box
const bio = boxen(
    chalk.whiteBright(`
Hi! I'm Ram Kumar
A second-year engineering student specializing in frontend development and data science.
Passionate about learning new skills and writing clean, professional code.

${chalk.green.bold("GitHub:")} ${chalk.blueBright("https://github.com/Rxm46")}
${chalk.green.bold("LinkedIn:")} ${chalk.blueBright("https://www.linkedin.com/in/ramkumar46")}
${chalk.green.bold("Portfolio (Available soon..!):")} ${chalk.greenBright("http://localhost:3000")}
${chalk.green.bold("Instagram:")} ${chalk.cyan("https://www.instagram.com/raahhmm__")}
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

// Function to handle user selection
async function promptUser() {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "🤖 What do you want to do?",
            choices: [
                "🌐 Open GitHub",
                "💼 Open LinkedIn",
                "📧 Send me an email",
                "🚪 Just quit!"
            ],
        },
    ]);

    switch (action) {
        case "🌐 Open GitHub":
            console.log("🚀 Opening GitHub...");
            await open("https://github.com/Rxm46");
            break;

        case "💼 Open LinkedIn":
            console.log("🔗 Opening LinkedIn...");
            await open("https://www.linkedin.com/in/ramkumar46");
            break;

        case "📧 Send me an email":
            console.log("📩 Opening mail...");
            await open("mailto:ramvj2005@gmail.com");
            break;

        case "🚪 Just quit!":
            console.log("👋 Goodbye!");
            process.exit(0);
    }

    // Ask user again if they didn't quit
    promptUser();
}

// Start CLI prompt
promptUser();
