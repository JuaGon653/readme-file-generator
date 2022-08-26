// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Title of project:", "Enter description:", "Steps for installation:", "Enter usage:", "What license do you prefer:", "Enter how to contribute:"
                    , "Enter tests:", "Any questions:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let returnMarkdown = markdown.generateMarkdown(data);
    
    fs.writeFile('./readme-files/' + fileName, returnMarkdown, () => {});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
      
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    
    {
        type: 'input',
        message: questions[5],
        name: 'contribution',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'tests',
    },
    {
        type: 'list',
        message: questions[4],
        name: 'license',
        choices: ["The Unlicense", "MIT License", "GNU GPLv3"]
    },
    {
      type: 'input',
      message: 'Enter GitHub username:',
      name: 'username'
    },
    {
      type: 'input',
      message: 'Enter email address:',
      name: 'email'
    }
  ])
  .then((response) =>
    writeToFile('README.md', response)
  )
  .catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();
