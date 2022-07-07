const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generateHtml.js");
const path = require ('path');

//Collecting the data of manager,engineer and intern and pushing it into an array teamMembers.
const teamMembers = [];
//questions array for manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name?(Required)",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your employee ID(Required)?",
  },
  {
    type: "input",
    name: "emailaddress",
    message: "Please enter your email address(Required)?",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter your office number(Required)?",
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Who would you like to add next?",
    choices: ['Engineer','Intern','finish building the team'],
  }
];
//questions array for engineer
const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter your name(Required)?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your employee ID(Required)?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "Please enter your email address(Required)?",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your github username(Required)?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Who would you like to add next(Required)?",
      choices: ['Engineer','Intern','finish building the team'],
    }
  ];
  //questions array for intern
const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter your name(Required)?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your employee ID(Required)?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "Please enter your email address(Required)?",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter your school name(Required)?",
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like to add next?",
        choices: ['Engineer','Intern','finish building the team'],
      }
  ];
function addManager() {
    inquirer.prompt(managerQuestions).then((managerResponse) => {
      console.log(managerResponse);
      const manager = new Manager(
          managerResponse.name,
          managerResponse.id,
          managerResponse.emailaddress,
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
        return writeToFile(teamMembers);       
      }
    });
  }
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    const engineer = new Engineer(
        engineerResponse.name,
        engineerResponse.id,
        engineerResponse.emailaddress,
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
        return writeToFile(teamMembers);       

      }
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((internResponse) => {
    const intern = new Intern(
        internResponse.name,
        internResponse.id,
        internResponse.emailaddress,
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
        return writeToFile(teamMembers);    
      }
  });
}
 addManager();
function writeToFile(data) {
fs.writeFile('./dist/index.html', generateHtml(data),'utf-8',(err) =>{
  if (err)
  console.log(err);
  else {
      console.log('"Success! Your team profile has been generated"')
  }
})
};






