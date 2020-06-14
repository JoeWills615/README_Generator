const inquire = require('inquirer');
var fs = require('fs');
const path = require ('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of this project?",

    type: "input",
    name: "description",
    message: "What is the purpose of this project?",
    
    type: "input",
    name: "installation",
    message: "How do you install this project?",

    type: "checkbox",
    name: "usage",
    message: "What language did you use for this project?",
    choices: [
        "Javascript",
        "HTML",
        "CSS",
        "Jquery",
        "Klingon"
    ]

    type: "checkbox",
    name: "license",
    message: "What license would you like to use on this project?",
    choices: [
        "Boost",
        "The Unlicense",
        "M I T",
        "Mozilla Public",
        "Apache"
    ]

    type: "input",
    name: "contributing",
    message: "Who helped on this project?",

    type: "input",
    name: "demo",
    message: "Does this project have a demo?",
    
    type: "input", 
    name: "github", 
    message: "What is your name on Github?",
    
    type: "input", 
    name: "email", 
    message: "What is your email address?",

    type: "input", 
    name: "questions", 
    message: "Do you have any questions about this project?",
  }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
      .then((data) => {
        writeToFile ("README.md", generateMarkdown({...data}))
      })
        .catch(error => {
        console.log(err);
      })
}

// function call to initialize program
init();


