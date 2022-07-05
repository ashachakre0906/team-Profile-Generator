//We require Employee which is a parent class.
const Employee = require("./Employee");
//We have the class Engineer with the corresponding constructor function.We are assigning
//name, id, email to this class and then defining the methods like getGitHub and getRole.
//this refers to the parent object which is "Engineer"
class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);//super keyword refers to the parent class
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.github;
  }

}

module.exports = Engineer;//exports the Engineer module