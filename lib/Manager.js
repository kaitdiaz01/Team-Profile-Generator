const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name,id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        //override to return Manager
        return 'Manager';
    }

}

module.exports = Manager;