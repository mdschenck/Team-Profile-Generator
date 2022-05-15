function renderManager(manager) {
  return `
  <div class="card col s3">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <li>ID: ${manager.getId()}</li>
        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li>Office Number: ${manager.getOfficeNumber()}</li>
    </div>
</div>
    `;
}

function renderEngineers(engineer) {
  return `
  <div class="card col s3">
        <div class="card-header">
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <li>ID: ${engineer.getId()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </div>
    </div>
    `;
}

function renderInterns(intern) {
  return `
    <div class="card col s3">
        <div class="card-header">
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <li>ID: ${intern.getId()}</li>
            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li>School: ${intern.getSchool()}</li>
        </div>
    </div>
    `;
}

function generateTeam(teamMembers) {
  return `
        ${renderManager(teamMembers.manager)}
        ${renderEngineers(teamMembers.engineer)}
        ${renderInterns(teamMembers.intern)}  
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
    <link rel="stylesheet" href="./assets/css/style.css" />
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
                    ${generateTeam(teamMembers)}
            </div>
        </div>

</body>
</html>
`;
}

module.exports = render;
