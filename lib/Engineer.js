const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github,) {
        //supermarket so grab all items you need from Employee
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        //override to return Engineer
        return 'Engineer';

    }
    
}

module.exports = Engineer;