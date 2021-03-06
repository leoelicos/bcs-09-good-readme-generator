# Good README Generator

![NodeJS](https://img.shields.io/badge/16.14.2-0?label=node.js&labelColor=white&color=black) ![Javascript](https://img.shields.io/badge/ES6-0?label=javascript&labelColor=white&color=black) ![npm](https://img.shields.io/badge/8.x-0?label=npm&labelColor=white&color=black) ![npm](https://img.shields.io/badge/8.2.2-0?label=inquirer&labelColor=white&color=black) ![chalk](https://img.shields.io/badge/4.1.2-0?label=chalk&labelColor=white&color=black)

## Introduction

This CLI generates a README for you, using input from you in response to prompts about what you would like the README to contain.

The app is written in `Javascript` and run with `node.js`. It uses `npm inquirer` and `npm chalk`.

I made this app to learn about `node.js`, `npm packages` and after making it I learned about the importance of `dependencies` and `separation of concerns`.

While making this app, I learned about the usefulness of node and npm to unlock the power of open source tools, the power of Node being able to call these packages, `fs` read / write, and also badges and their documentation

## Installation

| Step                                                                           | Command Line                                                          |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| install [Node.js](https://nodejs.org/en/download/)                             | —                                                                     |
| clone from [GitHub](https://github.com/leoelicos/bcs-09-good-readme-generator) | `git clone https://github.com/leoelicos/bcs-09-good-readme-generator` |
| go inside the folder                                                           | `cd bcs-09-good-readme-generator`                                     |
| install dependencies                                                           | `npm i` OR `npm i inquirer chalk`                                     |

_GIF of Installation:_ [gifinstall](#gifinstall)

## Usage

| Step                                        | Command Line                                                 |
| ------------------------------------------- | ------------------------------------------------------------ |
| run the generator                           | `node index.js`                                              |
| answer the prompts e.g. _What's the title?_ | `{title}`                                                    |
| use arrow keys to choose a license          | <kbd>↑</kbd> <kbd>↓</kbd>                                    |
| _cancel without creating readme_            | <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> |
| open /generated/ to see the file            | `cd generated/`                                              |

_Video Demo:_ [Demo On YouTube](https://www.youtube.com/watch?v=f1jgYJMuaGs)

_GIF of Usage:_ [gifrun](#gifrun)

_GIF of Document:_ [gifdocument](#gifdocument)

## Credits

### Documentation

-  [tchapi](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md) - markdown cheatsheet
-  [Request-Response](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) - Professional README Guide
-  [Choose-A-License](https://choosealicense.com/) - Choose an open source license

-  BCS Resources

## License

&copy; Leo Wong <leoelicos@gmail.com>

Licensed under the [MIT License](./LICENSE).

## GIF Demos

### gifInstall

_Quick demo of the installation CLI:_

![install](./Assets/install.gif)

---

### gifRun

_Quick demo of the usage CLI:_

![run](./Assets/run.gif)

---

### gifDocument

_Quick demo of the rendered product:_

![document](./Assets/document.gif)
