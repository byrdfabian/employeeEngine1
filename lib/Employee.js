// TODO: Write code to define and export the Employee class
//Creation of an Emploee class/constructor object with properties and values
//this refers to the the properties of this class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

//getName method use to return the value of this.name
    getName() {
        return (`${this.name}`);
    };

//getId method use to return the value of this.id
    getId() {
        return (parseInt(`${this.id}`));
    };

//getEmail method use to return the value of this.id
    getEmail() {
        return (`${this.email}`);
    };

//getRole method use to return the value of this.id
    getRole() {
        return ("Employee");
    };
};

//Export Employee class
module.exports = Employee;
