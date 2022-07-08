const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Patt", "9087", "pattp@yahoo.com",'ashachakre0906');
describe("ManagerClass", () => {
  it("test to check if we get the constructor values for the engineer object", () => {
    expect(engineer.name).toEqual("Patt");
    expect(engineer.id).toEqual("9087");
    expect(engineer.email).toEqual("pattp@yahoo.com");
    expect(engineer.github).toEqual("ashachakre0906")
  });
  it("test to check if we can get name from getName()method", () => {
    expect(engineer.getName()).toEqual("Patt");
  });
  it("test to check if we can get id from getId()method", () => {
    expect(engineer.getId()).toEqual("9087");
  });
  it("test to check if we can get email address from getEmail()method", () => {
    expect(engineer.getEmail()).toEqual("pattp@yahoo.com");
  });
  it("test to check if we can get github from getGithub()method", () => {
    expect(engineer.getGitHub()).toEqual("ashachakre0906");
  });
  it("test to check if we can get role from getRole()method", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
