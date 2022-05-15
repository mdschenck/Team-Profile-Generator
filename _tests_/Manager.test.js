const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Can Set office number with Constructor arguments", () => {
      const officeNumber = 202;
      const manager = new Manager("Jimmy", 12, "test@test.com", officeNumber);
      expect(manager.officeNumber).toBe(officeNumber);
    });
  });

  describe("Getter Methods", () => {
    it("Can Get office number with getOfficeNumber()", () => {
      const officeNumber = 202;
      const manager = new Manager("Jimmy", 12, "test@test.com", officeNumber);
      const managerOfficeNumber = manager.getOfficeNumber();
      expect(managerOfficeNumber).toBe(officeNumber);
    });

    it("should get role with getRole()", () => {
      const role = "Manager";

      const manager = new Manager("Jimmy", 12, "test@test.com", 202);
      const managerRole = manager.getRole();
      expect(managerRole).toBe(role);
    });
  });
});
