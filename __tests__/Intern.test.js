const Intern = require("../lib/Intern");
const intern = new Intern("Harry", "9087", "harry@yahoo.com",'SJSU');
describe("ManagerClass", () => {
  it("test to check if we get the constructor values for the engineer object", () => {
    expect(intern.name).toEqual("Harry");
    expect(intern.id).toEqual("9087");
    expect(intern.email).toEqual("harry@yahoo.com");
    expect(intern.school).toEqual("SJSU");
  });
  it("test to check if we can get name from getName()method", () => {
    expect(intern.getName()).toEqual("Harry");
  });
  it("test to check if we can get id from getId()method", () => {
    expect(intern.getId()).toEqual("9087");
  });
  it("test to check if we can get email address from getEmail()method", () => {
    expect(intern.getEmail()).toEqual("harry@yahoo.com");
  });
  it("test to check if we can get github from getSchool()method", () => {
    expect(intern.getSchool()).toEqual("SJSU");
  });
  it("test to check if we can get role from getRole()method", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
