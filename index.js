const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const render = require("./src/pgTemplate");

const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = {
  manager: null,
  engineers: [],
  interns: [],
};

const idArray = [,]

function createManager() {
    inquirer.prompt([
    { 
        type: 'input',
        name: 'managerName',
        message: "What is the Team Manager's Name?",
        validate: (answer) => {
            if (answer !== "") {
            return true;
            }
            return "Must enter at least one character!"
        }
    },
    { 
        type: 'input',
        name: 'managerId',
        message: "What is the team Manager's id",
        validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
                return true
            }
            return 'Please enter a number greater than zero'
        }
    },
    { 
        type: 'input',
        name: 'managerEmail',
        message: "What is the team Manager's email",
        const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
                return true
            }
            return 'Please enter a calid email address'
        },
        { 
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team Manager's office number",
            const pass = answer.match(/^[1-9]\d*$/)
                if (pass) {
                    return true
                }
                return 'Please enter a number greater than zero'
            },
}

]).then((answers) => {

const manager = new Manager(
answers.managerName,
answers.managerId,
answers.managerEmail,
answers.managerOfficeNumbner,
);

teamMembers.manager = manager;
idArray.push(answers.managerId);
buildTeam();




})
}







function buildTeam() {
  fs.writeFile("dist/team.html", render(teamMembers), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

buildTeam();
