const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
const { createTestScheduler } = require("jest");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Can Set github with Constructor arguments", () => {
      const github = "testGithub";
      const engineer = new Engineer("Jimmy", 12, "test@test.com", github);
      expect(engineer.github).toBe(github);
    });
  });

  describe("Getter Methods", () => {
    it("Can Get school with getSchool()", () => {
      const github = "testGithub";
      const engineer = new Engineer("Jimmy", 12, "test@test.com", github);
      const engGithub = engineer.getGithub();
      expect(engGithub).toBe(github);
    });

    it("should get role with getRole()", () => {
      const role = "Engineer";

      const engineer = new Engineer("Jimmy", 12, "test@test.com", "GA Tech");
      const engRole = engineer.getRole();
      expect(engRole).toBe(role);
    });
  });
});
