const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Engineer("foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can set github via constructor argument", () => {
  const testValue = "exampleGithub";
  const e = new Engineer("foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get github via getSchool()", () => {
  const testValue = "exampleGithub";
  const e = new Engineer("foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
