const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { writeFile } = require('../utils/generate-website.js');
const generateWebsite = require('../src/website-template.js');

function Prompt() {
    this.manager;
    this.internList = [];
    this.engineerList = [];
}

Prompt.prototype.initializePrompt = function () {
    console.log("====================================")
    console.log("Welcome to the Team Website Builder!")
    console.log("====================================")
    console.log("Instructions:")
    console.log("You will be prompted for information about your team.");
    console.log("Below are listed the prompts in order of appearance.")
    console.log("1. First you will enter information about the team manager");
    console.log("2. You will be prompted to select whether you wish to enter")
    console.log("information about an intern or engineer member of the team");
    console.log("3. After entering in information about an intern or engineer");
    console.log("you will be prompted if you want to add another team member");
    console.log("4. Keep entering in team member information until satisfied");
    console.log("5. When you want your website to be generated select the");
    console.log("'Generate Website' option.");
    console.log("6. You will then be told that the index file has been created!");
    console.log("You can find the index.html file in the dist folder of the code.");
    console.log("==================================================")
    console.log("Let's get started on making your team website now!")
    console.log("==================================================")
    this.managerHandler();
}

Prompt.prototype.managerHandler = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the name of your team's manager?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a name.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your team manager's team id?",
                validate: (idInput) => {
                    if (idInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter in an id.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your team manager's email?",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter an email address.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is your team manager's office number?",
                validate: (officeInput) => {
                    if (officeInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter an office number.');
                        return false;
                    }
                }
            }
        ]).then(managerInfo => {
            this.manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office);
            console.log("=========================================================")
            console.log("Now that the team manager's information has been inputed,")
            console.log("all that is left is inputing the information for the other")
            console.log("team members! Then your website will be generated!");
            console.log("==========================================================")
            this.addMoreEmployeesHandler();
        })
}

Prompt.prototype.addMoreEmployeesHandler = function () {
    console.log("==============================================================");
    console.log("Do you want to add a new team member or generate your website?");
    console.log("==============================================================");
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'Please select what you wish to do.',
                choices: ['Add an engineer team member', 'Add an intern team member', 'Generate your team webpage']
            }
        ]).then(selectionInfo => {
            if (selectionInfo.selection === 'Add an engineer team member') {
                this.engineerHandler();
            }
            else if (selectionInfo.selection === 'Add an intern team member') {
                this.internHandler();
            }
            else {
                this.generateWebsiteHandler();
            }
        })
}

Prompt.prototype.internHandler = function () {
    console.log("=======================================================")
    console.log("Let's add an intern's information to your team website.")
    console.log("=======================================================")

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the name of your team's intern?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a name.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your team intern's team id?",
                validate: (idInput) => {
                    if (idInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter in an id.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your team intern's email?",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter an email address.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your team intern's school name?",
                validate: (schoolInput) => {
                    if (schoolInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a school name.');
                        return false;
                    }
                }
            }
        ]).then(internInfo => {
            this.internList.push(new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school))
            console.log("================================================= ")
            console.log("The Intern's info has been added to your website!")
            console.log("=================================================")
            this.addMoreEmployeesHandler();
        })
}

Prompt.prototype.engineerHandler = function () {
    console.log("=========================================================")
    console.log("Let's add an engineer's information to your team website.")
    console.log("=========================================================")
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the name of your team's engineer?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a name.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your team engineer's team id?",
                validate: (idInput) => {
                    if (idInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter in an id.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your team engineer's email?",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter an email address.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your team engineer's GitHub username?",
                validate: (githubInput) => {
                    if (githubInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a GitHub username.');
                        return false;
                    }
                }
            }
        ]).then(engineerInfo => {
            this.engineerList.push(new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github))
            console.log("===================================================")
            console.log("The Engineer's info has been added to your website!")
            console.log("===================================================")
            this.addMoreEmployeesHandler();
        })
}

Prompt.prototype.generateWebsiteHandler = function () {
    console.log("==================")
    console.log("Generating website")
    console.log("==================")
    let templateData = generateWebsite(this.manager, this.engineerList, this.internList);
    return writeFile(templateData)
        .then(writeFileResponse => {
            console.log(writeFileResponse)
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = Prompt;