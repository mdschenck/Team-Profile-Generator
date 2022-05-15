const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  // Override getRole to return Manager?

  getRole() {
    return "Manager";
  }
}

//Manager Methods

module.exports = Manager;
