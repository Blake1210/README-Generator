// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const license = {
    'bsd3' : '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'bsd2' : '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'apache' : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
}

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installations for this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How should this project be used?"
    },
    {
        type: "input",
        name: "contributions",
        message: "List the contribution guidelines for your project."
    },
    {
        type: "input",
        name: "testing",
        message: "Test Instructions:"
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter your Github username and link:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(generateMarkdown(answers))
        FileSystem.writeFile('sample.md', generateMarkdown(answers), error =>{
            if (error) {console.log(error)}
        })

    })
};

// Function call to initialize app
init();
