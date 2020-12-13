// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//Creating a Employee Constructor/class with a required path to the Employee.js file
const Employee = require("./Employee");

//Creation of an Egineer class/constructor object with properties and values
//this refers to the the properties of this class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

//getRole method to return Engineer
    getRole() {
        return ("Engineer");
    };

//getGithum method used to return gitHub email data
    getGithub() {
        return (`${this.github}`);
    };
};

//Exporting the Engineer class/constructor
module.exports = Engineer;
