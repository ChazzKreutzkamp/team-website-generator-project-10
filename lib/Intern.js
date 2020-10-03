const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, job, id, email, school) {
        super(name, job, id, email);
        this.school = school;
    }
}

module.exports = Intern;