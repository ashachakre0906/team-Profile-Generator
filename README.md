# team-Profile-Generator
## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
## Table of Contents
  - [Description](#description)
  - [Application Demo](#application-demo)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Code Examples and Screenshots](#code-examples-and-screenshots)
  - [Contributing](#contributing)
  - [License](#license-1)
  - [Tests](#tests)
  - [Technologies Used](#technologies-used)
  - [Questions](#questions)
## Description
Challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. We will also write unit tests for each part of our code and ensure that it passes all of them.
## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
![Solution URL](https://github.com/ashachakre0906/team-Profile-Generator)
## Application Demo
![Live gif](/dist/assets/images/team-profile.gif)
![Screencastify link](https://drive.google.com/file/d/1X7fo16XXLiZs6Yr8Qc6COQTPitZe7FGh/view?usp=sharing)
## Installation
* Install Node in your computer by going to `https://nodejs.org/en/download/`
* Create .gitignore file before installing any npm dependencies and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub.
* Create a new github repository and clone it to your local machine.
* Navigate to the repo which you just created by typing`cd` command  and open it in your code editor by typing the command in your terminal `code .`
* Open the terminal in your code editor,initialized the repository with a `package.json` file by running `npm init -y`.
* Install the `Inquirer package`by entering the command `npm install inquirer` which will collect the user inputs.
* Application will be invoked by using the following command:
```bash
node index.js
```
## Usage
### Code Examples and Screenshots
***Function to writeToFile which we collect the data and generate index.html file***
```
function writeToFile(data) {
fs.writeFile('./dist/index.html', generateHtml(data),'utf-8',(err) =>{
  if (err)
  console.log(err);
  else {
      console.log('"Success! Your team profile has been generated"')
  }
})
};
```
## Tests
Our application is using Jest for running the unit tests for.In order to run jest tests for Employee,Engineer,Intern and Manager we enter the command in the terminal
```
npm run test
```
## Contributing
not applicable at this time.
## License
This project is license under [License: MIT](https://opensource.org/licenses/MIT)
## Technologies Used
![HTML Badge](https://img.shields.io/badge/HTML-orange.svg)
![CSS Badge](https://img.shields.io/badge/CSS-purple.svg)
![Javascript Badge](https://img.shields.io/badge/Javascript-blue.svg)
![Node.js Badge](https://img.shields.io/badge/Node-yellow.svg)
![Inquirer Badge](https://img.shields.io/badge/Inquirer-orange.svg)
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-darkblue.svg)
![Jest Badge](https://img.shields.io/badge/Jest-grey.svg)

## Questions
if you have any questions please reach out to me:<br>
Email Address: chourpagar.asha@gmail.com <br>
Github Repo URL:[GitHub](https://github.com/ashachakre0906)



