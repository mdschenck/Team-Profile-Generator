const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can set School via constructor argument", () => {
  const testValue = "GaTech";
  const e = new Intern("foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Can get School via getSchool()", () => {
  const testValue = 100;
  const e = new Intern("foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
