const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Can instantiate Employee instance", () => {
      const emp = new Employee();
      expect(typeof emp).toBe("object");
    });
  });

  test("Can set ID via constructor argument", () => {
    const id = 100;
    const emp = new Employee("foo", id);
    expect(emp.id).toBe(id);
  });

  test("Can set Name via constructor argument", () => {
    const name = "Jimmy";
    const emp = new Employee("foo", 1, name);
    expect(emp.name).toBe(name);
  });

  test("Can set Email via constructor argument", () => {
    const email = "test@test.com";
    const emp = new Employee("foo", 1, email);
    expect(emp.email).toBe(email);
  });

  test("Can get Name via getName()", () => {
    const name = "Jimmy";
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
  });

  test("Can get ID via getId()", () => {
    const id = 100;
    const emp = new Employee("foo", id);
    expect(emp.getId()).toBe(id);
  });

  test("Can get Email via getEmail()", () => {
    const email = "test@test.com";
    const emp = new Employee("foo", email);
    expect(emp.getEmail()).toBe(email);
  });
});
