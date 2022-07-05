const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//Collecting the data of manager,engineer and intern and pushing it into an array employee.
const employee = [];
//questions array for manager
const managerQuestions = [
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
    name: "office",
    message: "Please enter your office number?",
  },
];
//questions array for employee
const employeeQuestions = [
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
    name: "office",
    message: "Please enter your office number?",
  },
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
    employee.push(manager);
    console.log(employee);
    inquirer.prompt();
    //   fs.writeFile ()
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
    employee.push(engineer);
    console.log(employee);
    //   fs.writeFile ()
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
    employee.push(intern);
    console.log(employee);
    //   fs.writeFile ()
  });
}
