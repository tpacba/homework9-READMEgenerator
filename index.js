const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage Information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution Guidelines:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Test Instructions",
        name: "tests"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: [
            "ISC",
            "MIT", 
            "APACHE 2.0", 
            "GPL 3.0", 
            "BSD 3", 
            "None"
        ]
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "github"
    },
    {
        type: "input",
        message: "Email:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), error => {
        if(error) {
            console.log(error)
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => writeToFile("README.md", response))
}

// function call to initialize program
init();
