const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Description",
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
        name: "contribution"
    },
    {
        type: "input",
        message: "Test Instructions",
        name: "test"
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
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(response => console.log(response))
}

// function call to initialize program
init();
