// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
},{
    type: 'input',
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    `,
    name: 'description'
},{
    type: 'input',
    message: `What are the steps required to install your project? 
    
    Provide a step-by-step description of how to get the development environment running.
    `,
    name: 'installation'
},{
    type: 'input',
    message: `How do we use this program?
    
    Provide instructions and examples for use. Include screenshots as needed.
    `,
    name: 'usage'
},{
    type: 'input',
    message: `List your collaborators, if any, with links to their GitHub profiles.

    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    `,
    name: 'credits'
},{
    type: 'list',
    message: 'What license are you going to be using?',
    name: 'license',
    choices: ['MIT','Apache License 2.0','GNU General Public License v3.0','The Unlicense','No License']
},{
    type: 'input',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    name: 'tests',
},{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
},{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync("./dist/"+fileName, data)
    console.log("README Generated");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const markDown = generateMarkdown(response)
        writeToFile("README.md",markDown);
});

}

// Function call to initialize app
init();
