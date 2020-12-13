// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Creating a Employee Constructor/class with a required path to the Employee.js file
const Employee = require("./Employee");

//creation of an intern class that extends the employee class/constructor
class Intern extends Employee {

// constructer properties
    constructor(name, id, email, school) {
        super(name, id, email);

//this.school propertiey and value link to this object
        this.school = school;
    };

//getRole method used to return Intern
    getRole() {
        return ("Intern");
    };

//getSchool method used to return the data/value from the school value
    getSchool() {
        return (`${this.school}`);
    };
};

module.exports = Intern;

