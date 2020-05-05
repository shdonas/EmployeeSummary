// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log("Function called" + this.name);
    }

    getID() {

    }

    getEmail() {

    }

    getRole() {
        return Employee;
    }
}

module.exports = Employee