// const employee = require("/lib/Employee");
// const manager = require("/lib/Manager");
// const engineer = require("/lib/Engineer");
// const intern = require("/lib/Intern");

function renderManager(manager) {
  return `
  <div class="card">
  <div class="card-header">
    <h2>${manager.getName()}</h2>
    <h3>${manager.getRole()}</h3>
    </div>
<div class="card-body">
    <li>ID: ${manager.getId()}</li>
    <li>Email: <a href="mainlto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li>Office Number: ${manager.getOfficeNumber()}</li>
  `;
}

function renderEngineers(engineer) {
  return `
  <div class="card" background-color="red">
  <div class="card-header">
    <h2>${engineer.getName()}</h2>
    <h3>${engineer.getRole()}</h3>
    </div>
<div class="card-body">
    <li>ID: ${engineer.getId()}</li>
    <li>Email: <a href="mainlto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li>Github: ${engineer.getGithub()}</li>
  `;
}

function renderInterns(intern) {
  return `
    <div class="card" background-color="yellow">
    <div class="card-header">
      <h2>${intern.getName()}</h2>
      <h3>${intern.getRole()}</h3>
      </div>
  <div class="card-body">
      <li>ID: ${intern.getId()}</li>
      <li>Email: <a href="mainlto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li>School: ${intern.getschool()}</li>
    `;
}

function generateTeam(teamMembers) {
  return `
        ${renderManager(teamMembers.manager)}

        ${renderInterns(teamMembers.interns)}  
    `;
}

function render(teamMembers) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <title>My Team</title>
  </head>
<body>
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    ${generateTeam(teamMembers)}
                </div>
            </div>
        </div>
</body>
</html>
`;
}

module.exports = render;
