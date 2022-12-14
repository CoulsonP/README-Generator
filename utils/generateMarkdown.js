//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(license === "Appache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license ===  "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else {return``}
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#license)
7. [Question](#question)
## Description
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contribution
${data.Contribution}
## Test
${data.Test}
## Liscense
${data.License}
## Question
For any question reach out to me at ${data.Email}
or look at ${data.github} on github.
`;
}

module.exports = generateMarkdown;
