// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License"){
    return ""
  } else{
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("testing in generate markdown");
  return `# ${data.title}

  ## Table of Contents:
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Testing](#Usage)
  - [Questions](#Questions)
  - [License](#License)

##Desripction
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##Contributions
${data.contributions}

##Testing
${data.testing}

##Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
