const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.job = 'Intern';
        this.school = school;
    }
}

module.exports = Intern;