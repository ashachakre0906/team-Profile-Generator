const Employee = require("../lib/Employee");
const employee = new Employee("Asha", "1078", "chourpagar.asha@gmail.com");
describe("EmployeeClass", () => {
  it("test to check if we get the constructor values for the employee object", () => {
    expect(employee.name).toBe("Asha");
    expect(employee.id).toBe("1078");
    expect(employee.email).toBe("chourpagar.asha@gmail.com");
  });
  it("test to check if we can get name from getName()method", () => {
    expect(employee.getName()).toBe("Asha");
  });
  it("test to check if we can get id from getId()method", () => {
    expect(employee.getId()).toBe("1078");
  });
  it("test to check if we can get email address from getEmail()method", () => {
    expect(employee.getEmail()).toBe("chourpagar.asha@gmail.com");
  });
  it("test to check if we can get role from getRole()method", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
