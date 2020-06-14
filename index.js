const inquire = require("inquirer")

// array of questions for user
const questions = [{type: "input", name: "github", message: "",}

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    .prompt(questions)
      .then(answers => {
        // Use user feedback for... whatever!!
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });

}

// function call to initialize program
init();


