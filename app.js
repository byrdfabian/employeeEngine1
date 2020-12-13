//Required Paths
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Required Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please enter your name:"
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter your employee id:"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter your email:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number:"
    }
]).then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);

    teamMembers.push(manager);

    addEmployee();
});

//Function to add another employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Please select the type of employee you would like to add to your team:",
            choices: ["Engineer", "Intern", "I would not like to add another employee."]
        }
    ]).then((answers) => {
        if (answers.employeeType === "Engineer"){
            addEnginer();
        } else if (answers.employeeType === "Intern"){
            addIntern();
        } else {
            generateHTML();
        }
    });
}

//Function to add engineer
const addEnginer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the name of your engineer:"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please enter the employee id of your engineer:"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the email of your engineer:"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Please enter the GitHub username of your engineer:"
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        teamMembers.push(engineer);

        addEmployee();
    });
};

//Function to add intern
const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the name of your intern:"
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter the employee id of your intern:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the email of your intern:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the school of your intern:"
        }
    ]).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        teamMembers.push(intern);

        addEmployee();
    })
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
const generateHTML = () => {
    fs.writeFileSync(outputPath, render(teamMembers));
};