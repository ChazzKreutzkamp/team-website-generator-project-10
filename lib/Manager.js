const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.job = 'Manager';
        this.office = office;
    }
}

module.exports = Manager;