// //Declare Employee Properties

// const Employee = function (name, id, email)
// {
//     this.name = "Name"
//     this.id = "Id"
//     this.email = "Email"
// }
// Employee.prototype.getId = function() {
// }
// Employee.prototype.getName = function() {
// }
// Employee.prototype.getEmail = function() {
// }

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getId() {}
  getName() {}
  getEmail() {}
}

const employee1 = new Employee("Michael", 44, "example@ex.com");
employee1.getId();
employee1.getName();
employee1.getEmail();
console.log(employee1.name + " - " + employee1.id + " - " + employee1.email);

module.exports = Employee;
