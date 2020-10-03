const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, job, id, email, github) {
        super(name, job, id, email);
        this.github = github;
    }
}

module.exports = Engineer;