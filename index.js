const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateHtml = require ("./dist");

//Collecting the data of manager,engineer and intern and pushing it into an array employee.
const teamMembers = [];
//questions array for manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your manager's employee ID?",
  },
  {
    type: "input",
    name: "address",
    message: "Please enter your manager's email address?",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter your manager's office number?",
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Who would you like to add ?",
    choices: ['Engineer','Intern','None'],
  }
];
//questions array for intern
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your team managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your employee ID?",
  },
  {
    type: "input",
    name: "address",
    message: "Please enter your email address?",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter your school name?",
  },
];
//questions array for engineer
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your team managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your employee ID?",
  },
  {
    type: "input",
    name: "address",
    message: "Please enter your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username?",
  },
];
function addManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    console.log(response);
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    teamMembers.push(manager);
  });
}
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((response) => {
    console.log(response);
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    teamMembers.push(engineer);
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((response) => {
    console.log(response);
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    teamMembers.push(intern);
  });
}

