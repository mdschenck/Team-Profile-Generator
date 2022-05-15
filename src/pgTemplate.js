// const renderPage =

function renderManager(manager) {
  return "manager";
}

function renderEngineers(engineer) {
  return "engineer";
}
function renderInterns(intern) {
  return "intern";
}

function generateTeam(teamMembers) {
  return `
        ${renderManager(teamMembers.manager)}
        ${renderEngineers(teamMembers.engineers)}
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
