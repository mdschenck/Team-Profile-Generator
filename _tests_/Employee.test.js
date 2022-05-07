const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set ID via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set Name via constructor argument", () => {
    const testValue = "Jimmy";
    const e = new Employee("foo", 1, testValue);
    expect(e.name).toBe(testValue);
  });

test("Can set Email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get Name via getName()", () => {
  const testValue = "Jimmy";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get ID via getId()", () => {
  const testValue = 100;
  const e = new Employee("foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get Email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("foo", testValue);
  expect(e.getEmail()).toBe(testValue);
});
