const Manager = require("../lib/Manager");
const manager = new Manager("John", "9087", "johnp@yahoo.com");
describe("ManagerClass", () => {
  it("test to check if we get the constructor values for the manager object", () => {
    expect(manager.name).toBe("Asha");
    expect(manager.id).toBe("1078");
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
