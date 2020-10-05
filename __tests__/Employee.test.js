const Employee = require('../lib/Employee.js');

test('creates an Intern object', () => {
    const employee = new Employee('Spurt', 123, 'SpurtTheKobold.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Tests if the get functions return the appropriate data', () => {
    const employee = new Employee('Example', 123, 'Example.Email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});