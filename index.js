// packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Whats the name of your app?",
    },
    {
        type:"input",
        name:"Description",
        message:"What does your app do?",
    },
    {
        type:"input",
        name:"Installation",
        message:"Please include any installation instructions for your app?",
    },
    {
        type:"input",
        name:"Usage",
        message:"What is your app used for?",
    },
    {
        type:"input",
        name:"Contribution",
        message:"Please list any contributers to your app?",
    },
    {
        type:"input",
        name:"Test",
        message:"Please list test instructions?",
    },
    {
        type:"list",
        name:"License",
        message:"What Liscense does your app use?",
        choices:["Appache", "MIT", "Mozilla", "None"]
    },
    {
        type:"input",
        name:"Email",
        message:"What is your email",
    },
    {
        type:"input",
        name:"github",
        message:"What is your github?",
    },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFileSync("TestREADME.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
