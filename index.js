const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateT = ("./dist/index.html");
const path = require ('path');

//Collecting the data of manager,engineer and intern and pushing it into an array employee.
const teamMembers = [];
//questions array for manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name?",
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
  {
    type: "list",
    name: "addEmployee",
    message: "Who would you like to add next?",
    choices: ['Engineer','Intern','None'],
  }
];
//questions array for engineer
const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter your name?",
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
    {
      type: "list",
      name: "addEmployee",
      message: "Who would you like to add next?",
      choices: ['Engineer','Intern','None'],
    }
  ];
  //questions array for intern
const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter your name?",
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
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like to add next?",
        choices: ['Engineer','Intern','None'],
      }
  ];
function addManager() {
    inquirer.prompt(managerQuestions).then((managerResponse) => {
      console.log(managerResponse);
      const manager = new Manager(
          managerResponse.name,
          managerResponse.id,
          managerResponse.email,
          managerResponse.office,
      );
      teamMembers.push(manager);
      switch (managerResponse.addEmployee){
        case 'Engineer':
            addEngineer();
           break;
        case  'Intern':
            addIntern();
            break;
        default : 
        return ; //stop the function         
      }
    });
  }
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    const engineer = new Engineer(
        engineerResponse.name,
        engineerResponse.id,
        engineerResponse.email,
        engineerResponse.github
    );
    teamMembers.push(engineer);
    switch (engineerResponse.addEmployee){
        case 'Engineer':
           addEngineer();
           break;
        case  'Intern':
            addIntern();
            break;
        default : 
        return ; //stop the function

      }
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((internResponse) => {
    console.log(response);
    const intern = new Intern(
        internResponse.name,
        internResponse.id,
        internResponse.email,
        internResponse.school
    );
    teamMembers.push(intern);
    switch (internResponse.addEmployee){
        case 'Engineer':
           addEngineer();
           break;
        case  'Intern':
            addIntern();
            break;
        default : 
        return ; //stop the function
      }
  });
}
addManager();
//function when user selects 'none' from the choices
function generateHTML(){
  
}






