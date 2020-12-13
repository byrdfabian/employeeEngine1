// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//Creating a Employee Constructor/class with a required path to the Employee.js file
const Employee = require("./Employee");

//creation of an intern class that extends the employee class/constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

//getRole method to return Manager
    getRole() {
        return ("Manager");
    };
    
//getOfficeNumber method to return the office number from this object
    getOfficeNumber() {
        return (parseInt(`${this.officeNumber}`));
    };
};

module.exports = Manager;
