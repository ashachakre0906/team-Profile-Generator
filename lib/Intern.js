//We require Employee which is a parent class.
const Employee = require("./Employee");
//We have the class Intern with the corresponding constructor function.We are assigning
//name, id, email and school to this class and then defining the methods like getGitHub and getRole.
//this refers to the parent object which is "Intern"
class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }

}

module.exports = Intern;//exports the Intern module