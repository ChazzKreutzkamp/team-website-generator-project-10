const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.job = 'Engineer';
        this.github = github;
    }
}

module.exports = Engineer;