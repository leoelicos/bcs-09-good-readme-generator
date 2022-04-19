// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	return `![${license}](https://img.shields.io/badge/${license.replace(' ', '%20')}-0?label=license&labelColor=white&color=black) `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const fs = require('fs');
function renderLicenseLink(license) {
	var licenseLink = './LICENSE';
	fs.readFile(licenseLink, 'utf8', (err) => {
		if (err) licenseLink = '';
	});
	return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return `Licensed under the [${license}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const { title, description, installation, usage, contributing, tests, license, username, email } = data;
	return `# ${title}
  ${renderLicenseBadge(license)}
  
## Description

${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  
${installation}
  
## Usage
  
${usage}
  
## License
  
${renderLicenseSection(license)}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any additional questions, please send me an email at ${email} with '${title}' in the Subject. You can also find me on [GitHub](https://github.com/${username}).
`;
}

module.exports = generateMarkdown;
