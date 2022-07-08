const Manager = require("../lib/Manager");
const manager = new Manager("John", "9087", "johnp@yahoo.com",'1234');
describe("ManagerClass", () => {
  it("test to check if we get the constructor values for the manager object", () => {
    expect(manager.name).toBe("John");
    expect(manager.id).toBe("9087");
    expect(manager.email).toBe("johnp@yahoo.com");
    expect(manager.officeNumber).toBe("1234");
  });
  it("test to check if we can get name from getName()method", () => {
    expect(manager.getName()).toBe("John");
  });
  it("test to check if we can get id from getId()method", () => {
    expect(manager.getId()).toBe("9087");
  });
  it("test to check if we can get email address from getEmail()method", () => {
    expect(manager.getEmail()).toBe("johnp@yahoo.com");
  });
  it("test to check if we can get role from getRole()method", () => {
    expect(manager.getRole()).toBe("Manager");
  });
});
