# pwa-text-editor
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This project creates a browser-based text editor that is deployed as a progressive web app (PWA). It can be installed on your local machine and runs in the browser or offline.  It features several data persistent techniques and uses several PWA dependencies including Babel, Webpack, and, IndexDB and Service Worker. 

<details>
<summary><strong>Table of Contents</strong></summary>

- [pwa-text-editor](#pwa-text-editor)
  - [Description](#description)
  - [Installation](#installation)
    - [Local Installation](#local-installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Tests](#tests)
  - [Languages, Skills and Credits](#languages-skills-and-credits)
  - [Screenshots](#screenshots)
  - [Questions and Links](#questions-and-links)
</details>

## Installation
### Local Installation
- Clone the repo.
- Run `npm init` followed by `npm install` to install the dependencies.
- Use the command `npm run start` to start the server at http://localhost:3000/.
- The application can be installed on the local machine, and thus run locally, by clicking the install button and following the prompts.

## Usage
This text editor will accept text, save it and rerender information when the browser is refreshed or when using the editor off-line.

## License
Distributed under the **MIT** license.

## Contributing Guidelines
Code of Conduct outlined in the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests
There are currently no tests written for this application.

## Languages, Skills and Credits
- JavaScript
- Node.js
- Dependencies:
    - [express](https://www.npmjs.com/package/express) 
    - [concurrently](https://www.npmjs.com/package/concurrently) - run multiple commands concurrently such as npm install and npm build 
    - [webpack](https://www.npmjs.com/package/webpack) 
        - [babel](https://www.npmjs.com/package/@babel/core): allows different formats to be read
        - [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin): simplifies html in my bundles
        - [css-loader](https://www.npmjs.com/package/css-loader) and [style-loader](https://www.npmjs.com/package/style-loader): 
        - [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest): allows for automatic icon resizing
        - [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin): generates a service worker

## Screenshots
![Screenshot of the app](./assets/Screen%20Shot%202022-09-10%20at%204.04.32%20PM.png)
![Screenshot of application installed locally](./assets/Screen%20Shot%202022-09-08%20at%202.16.37%20PM.png)
![Screenshot from the inspect tool looking at Applications](./assets/Screen%20Shot%202022-09-08%20at%202.55.37%20PM.png)
![Screenshot of the registered service worker](./assets/Screen%20Shot%202022-09-08%20at%202.54.50%20PM.png)

## Questions and Links
Please reach out with any questions regarding the application.

The deployed application on [Heroku](https://blooming-plains-36065.herokuapp.com/)

The repository in [GitHub](https://github.com/amccorkl/PWA-text-editor)

 
