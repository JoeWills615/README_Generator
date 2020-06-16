// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Demo](#demo)
  * [Questions](#questions)
  * [Github_Info](#github_info)
  * [Email_Address](#email_address)
  * [Project_Images](#project_images)


# Desciption
  ${data.description}

# Installation
  ${data.installation}

# Usage
  ${data.usage}

# License
  ${data.license}

# Contributing
  ${data.contributing}

# Demo
  ${data.demo}

# Demo_Link
  [README_Generator Demo](https://drive.google.com/file/d/1L0TKOWWN13dmA5Cysw9s4uufbqDITs5E/view)

# Questions
  ${data.questions}

# Github_Info
  ${data.github}

# Email_Address
  ${data.email}

# Project_Images

  <img src="./images/readme_01.PNG">

  <br/>
  <br/>

  <img src="./images/readme_02.PNG">
  
  <br/>
  <br/>

  <img src="./images/readme_03.PNG">

  <br/>
  <br/>

  <img src="./images/readme_04.PNG">

  <br/>
  <br/>

  <img src="./images/readme_05.PNG">

  <br/> 
  <br/>

  <img src="./images/readme_06.PNG">

 

`;
}

module.exports = generateMarkdown;

