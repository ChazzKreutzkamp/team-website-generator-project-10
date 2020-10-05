const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = 'Engineer';
        this.github = github;
    }
    getGithub() {
        return `<a href="https://github.com/${this.github}">${this.github}</a>`;
    }
    getRole() {
        return `<span class="oi oi-wrench"></span> ${this.role}`;
    }
}

module.exports = Engineer;