const inquirer = require ('inquirer');
const fs = require ('fs');
const managerQuestions = [
    {
       type : 'input',
       name : 'name',
       message : 'Please enter your team managers name?',
    }
    ,
    {
        type : 'input',
        name : 'id',
        message : 'Please enter your employee ID?',
     }
     ,
     {
        type : 'input',
        name : 'address',
        message : 'Please enter your email address?',
     }
     ,
     {
        type : 'input',
        name : 'office',
        message : 'Please enter your office number?',
     }
]
const employeeQuestions = [
    {
       type : 'input',
       name : 'name',
       message : 'Please enter your team managers name?',
    }
    ,
    {
        type : 'input',
        name : 'id',
        message : 'Please enter your employee ID?',
     }
     ,
     {
        type : 'input',
        name : 'address',
        message : 'Please enter your email address?',
     }
     ,
     {
        type : 'input',
        name : 'office',
        message : 'Please enter your office number?',
     }
]
const internQuestions = [
    {
       type : 'input',
       name : 'name',
       message : 'Please enter your team managers name?',
    }
    ,
    {
        type : 'input',
        name : 'id',
        message : 'Please enter your employee ID?',
     }
     ,
     {
        type : 'input',
        name : 'address',
        message : 'Please enter your email address?',
     }
     ,
     {
        type : 'input',
        name : 'school',
        message : 'Please enter your school name?',
     }
]
const engineerQuestions = [
    {
       type : 'input',
       name : 'name',
       message : 'Please enter your team managers name?',
    }
    ,
    {
        type : 'input',
        name : 'id',
        message : 'Please enter your employee ID?',
     }
     ,
     {
        type : 'input',
        name : 'address',
        message : 'Please enter your email address?',
     }
     ,
     {
        type : 'input',
        name : 'github username',
        message : 'Please enter your github username?',
     }
]
inquirer.prompt