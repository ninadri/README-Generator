// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) return '';
    switch (license) {
     case 'MIT':
         return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
     case 'Apache 2.0':
         return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'GPLv3':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      default:
        return ''; 
  }
 }
      
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) return '';
    switch (license) {
      case 'MIT':
        return '[MIT](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'GPLv3':
        return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
      default:
        return ''; 
    }
  }
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) return '';
    return `## License\nThis project is licensed under the ${license} - see ${renderLicenseLink(license)} for details.`;
  }
  

// TODO: Create a function to generate markdown for README

const generateMarkdown = 
({ 
  title, description, installation, 
  usage, license, contributing, tests, github, email }) => 
  
 `# ${title}

## Description
${description}

## Table of Contents  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#email)

## Installation
${installation}

## Usage
${usage}

## License 
${renderLicenseSection(license)}
${renderLicenseBadge(license)}

## Contributing
${contributing}

---

## Tests
${tests}

## Questions
Github: [${github}](https://github.com/${github})  
Email: [${email}](mailto:${email})`
;


module.exports = generateMarkdown;
