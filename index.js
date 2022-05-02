const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");
const templateHTML = require("./src/generateHTML");

//maybe need an array to push employees to then push into template literal?
const team = [];

const addEngineer = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your Engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your Engineer's employee ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your Engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Engineer's GitHub username?",
      },
    ])
    .then((data) => {
      var engineerInput = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.github
      );
      team.push(engineerInput);
      buildTeam();
    });
};

const addIntern = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your Intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your Intern's ID number?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your Intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did your Intern attend?",
      },
    ])
    .then((data) => {
      var internInput = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.school
      );
      team.push(internInput);
      buildTeam();
    });
};

const buildTeam = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teammember",
        message: "What would you like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Exit"],
      },
    ])
    .then((data) => {
      if (data.teammember == "Add an Engineer") {
        addEngineer();
      } else if (data.teammember == "Add an Intern") {
        addIntern();
      } else {
        const html = templateHTML(team);
        fs.writeFile(`./dist/index.html`, html, (err) =>
          err ? console.log(err) : console.log("Success!")
        );
      }
    });
};

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your team manager's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your team manager's email?",
    },
    {
      type: "input",
      name: "officenumber",
      message: "What is your team manager's office number?",
    },
  ])
  .then((data) => {
    var managerInput = new Manager(
      data.managerName,
      data.employeeId,
      data.email,
      data.officenumber
    );
    team.push(managerInput);
    buildTeam();
  });
