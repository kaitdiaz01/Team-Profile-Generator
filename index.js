const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');
const templateHTML = require('./src/generateHTML');

//maybe need an array to push employees to then push into template literal?

inquirer.prompt([{
    type: "input",
    name: "managername",
    message: "What is your team manager's name?",
},
{
    type:"input",
    name:"employeeid",
    message: "What is your team manager's employee ID?"
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
       var managerInput = new Manager(data.name,data.employeeid,data.email,data.officenumber)
       
    })
    // .then((data) => {
    //    return templateHTML(data);
     
    // })
    // .then((data) => {
    //     return writeToFile(data)
    // })


    // const writeToFile = data => {
    //     fs.writeFile(`index.html`,data, (err) =>
    //       err ? console.log(err) : console.log("Success!")
    //     );
    //   };