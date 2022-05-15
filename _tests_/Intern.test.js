const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
const { createTestScheduler } = require("jest");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Can Set school with Constructor arguments", () => {
      const school = "GA Tech";
      const intern = new Intern("Jimmy", 12, "test@test.com", school);
      expect(intern.school).toBe(school);
    });
  });

  describe("Getter Methods", () => {
    it("Can Get school with getSchool()", () => {
      const school = "GA Tech";
      const intern = new Intern("Jimmy", 12, "test@test.com", school);
      const internSchool = intern.getSchool();
      expect(internSchool).toBe(school);
    });

    it("should get role with getRole()", () => {
      const role = "Intern";

      const intern = new Intern("Jimmy", 12, "test@test.com", "GA Tech");
      const internRole = intern.getRole();
      expect(internRole).toBe(role);
    });
  });
});
