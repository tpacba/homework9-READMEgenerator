const inquirer = require("inquirer");
const fs = require("fs")
const md = require("./utils/generateMarkdown")

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
    // let license = data.license.split(' ').join('');
    // data = `# ${data.title}\n\n` +
    // `![readmegenerator](https://img.shields.io/badge/license-${license}-red.svg)\n\n` +
    // `## Description\n\n${data.description}\n\n` +
    // `## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [License](#license)\n* [Tests](#tests)\n* [Questions](#questions)\n\n` +
    // `## Installation\n\n${data.installation}\n\n` +
    // `## Usage\n\n${data.usage}\n\n` +
    // `## Contributing\n\n${data.contributing}\n\n` +
    // `## License\n\n${data.license}\n\n` +
    // `## Tests\n\n${data.tests}\n\n` +
    // `## Questions\n\nIf you have any questions, you can reach me through my email ${data.email} or connect with me on [GitHub](https://github.com/${data.github}).\n\n`;

    fs.writeFile(fileName, md(data), error => {
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
