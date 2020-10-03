const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, job, id, email, office) {
        super(name, job, id, email);
        this.office = office;
    }
}

module.exports = Manager;