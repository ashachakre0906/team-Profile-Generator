const Employee = require("./Employee");

class Intern extends Employee {

  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Intern";
  }

  getOfficeNumber() {
    return this.gitHub;
  }

}

module.exports = Intern;