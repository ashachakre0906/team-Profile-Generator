//We have the class Employee with the corresponding constructor function.We are assigning
//name, id, email to each class and then defining the methods like getName,getId,getEmail,
//and getRole.this refers to the parent object which is "Employee"
class Employee {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    //Methods  used to return information about the class.
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  
  }
  
  module.exports = Employee;//exports the Emnployee module