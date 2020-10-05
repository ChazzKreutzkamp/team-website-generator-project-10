const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.role = 'Manager';
        this.office = office;
    }
    getOfficeNumber() {
        return `Office number: ${this.office}`;
    }
    getRole() {
        return `<span class="oi oi-briefcase"></span> ${this.role}`;
    }
}

module.exports = Manager;