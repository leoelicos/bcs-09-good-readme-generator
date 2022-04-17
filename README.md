# Good README Generator

![NodeJS](https://img.shields.io/badge/16.14.2-0?label=node.js&labelColor=white&color=black) ![Javascript](https://img.shields.io/badge/ES6-0?label=javascript&labelColor=white&color=black) ![npm](https://img.shields.io/badge/8.x-0?label=npm&labelColor=white&color=black) ![npm](https://img.shields.io/badge/8.2.2-0?label=inquirer&labelColor=white&color=black)

## Introduction

This CLI generates a README for you, using input from you in response to prompts about what you would like the README to contain.

I made this app to learn about `node.js`, `npm packages` and the importance of such things as `dependencies` and `separation of concerns`.

While making this app, I learned about the usefulness of node and npm to unlock the power of open source tools, the power of Node being able to call these packages, `fs` read / write, and also badges and their documentation

## Installation

| Step                                                                           | Command Line                                                          |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| install [Node.js](https://nodejs.org/en/download/)                             | —                                                                     |
| clone from [GitHub](https://github.com/leoelicos/bcs-09-good-readme-generator) | `git clone https://github.com/leoelicos/bcs-09-good-readme-generator` |
| go inside the folder                                                           | `cd bcs-09-good-readme-generator`                                     |
| install [inquirer](https://www.npmjs.com/package/inquirer)                     | `npm i inquirer`                                                      |
| install [chalk](https://www.npmjs.com/package/chalk)                           | `npm i chalk`                                                         |

## Usage

| Step                                        | Command Line                                                 |
| ------------------------------------------- | ------------------------------------------------------------ |
| run the generator                           | `node index.js`                                              |
| answer the prompts e.g. _What's the title?_ | `{title}`                                                    |
| use arrow keys to choose a license          | <kbd>↑</kbd> <kbd>↓</kbd>                                    |
| _cancel without creating readme_            | <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> |
| open /generated/ to see the file            | `cd generated/`                                              |

## Credits

### Documentation

-  [tchapi](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md) - markdown cheatsheet
-  [Request-Response](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) - Professional README Guide
-  [Choose-A-License](https://choosealicense.com/) - Choose an open source license

-  BCS Resources

## License

&copy; Leo Wong <leoelicos@gmail.com>

Licensed under the [MIT License](./LICENSE).
