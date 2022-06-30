const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.gitHub;
  }

}

module.exports = Manager;