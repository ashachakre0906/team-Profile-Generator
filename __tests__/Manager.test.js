const Manager = require("../lib/Manager");
const manager = new Manager("John", "9087", "johnp@yahoo.com",'1234');
describe("ManagerClass", () => {
  it("test to check if we get the constructor values for the manager object", () => {
    expect(manager.name).toEqual("John");
    expect(manager.id).toEqual("9087");
    expect(manager.email).toEqual("johnp@yahoo.com");
    expect(manager.officeNumber).toEqual("1234");
  });
  it("test to check if we can get name from getName()method", () => {
    expect(manager.getName()).toEqual("John");
  });
  it("test to check if we can get id from getId()method", () => {
    expect(manager.getId()).toEqual("9087");
  });
  it("test to check if we can get email address from getEmail()method", () => {
    expect(manager.getEmail()).toEqual("johnp@yahoo.com");
  });
  it("test to check if we can get role from getRole()method", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
  it("test to check if we can get role from getofficeNumber()method", () => {
    expect(manager.getOfficeNumber()).toEqual("1234");
  });
});
