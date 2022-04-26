// function internCard()
// if statement to say if intern is chosen then render intern card template literal and call this function to retunr template literal into generatehtml()
// would do the same for engineerCard()


function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <body>
        <header class="jumbotron text-center">
          <h1 class="display-4">My Team</h1>
        </header>
        <div class="container">
          <div class="row justify-content-center">
            <div class="card mb-3 mr-3" style="width: 18rem">
              <div class="card-header">
                <h1>${data.managername}</h1>
                <h2>Manager</h2>

              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.employeeid}</li>
                <li class="list-group-item">Email: ${data.email}</li>
                <li class="list-group-item">Office Number: ${data.officenumber}</li>
              </ul>
            </div>
          </div>
        </div>
        
      </body>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
        crossorigin="anonymous"
      ></script>
    </html>
    `
;}

module.exports = generateHTML;