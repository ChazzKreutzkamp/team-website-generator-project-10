const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = 'Intern';
        this.school = school;
    }
    getSchool() {
        return `School: ${this.school}`;
    }
    getRole() {
        return `<span class="oi oi-pencil"></span> ${this.role}`;
    }
}

module.exports = Intern;