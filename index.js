const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Creates an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information for your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Are there any contribution guidelines for your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the test instructions for your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What would you like to title your project?",
    name: "title",
  },
  {
    type: "list",
    message: "What license would you like to use for your project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

inquirer.prompt(questions).then((userAnswers) => {
  fs.writeFileSync("README.md", generateMarkdown(userAnswers));
});
