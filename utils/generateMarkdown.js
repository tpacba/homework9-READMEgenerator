// function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license.split(' ').join('');
  const text = `# ${data.title}\n\n` +
    `![license](https://img.shields.io/badge/license-${license}-red.svg)\n\n` +
    `## Description\n\n${data.description}\n\n` +
    `## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [License](#license)\n* [Tests](#tests)\n* [Questions](#questions)\n\n` +
    `## Installation\n\n${data.installation}\n\n` +
    `## Usage\n\n${data.usage}\n\n` +
    `## Contributing\n\n${data.contributing}\n\n` +
    `## License\n\n${data.license}\n\n` +
    `## Tests\n\n${data.tests}\n\n` +
    `## Questions\n\nIf you have any questions, you can reach me through my email ${data.email} or connect with me on [GitHub](https://github.com/${data.github}).\n\n`;

  return text;
}

module.exports = generateMarkdown;
