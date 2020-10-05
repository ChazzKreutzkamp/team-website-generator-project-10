const Manager = require('../lib/Manager.js');

test('creates an Intern object', () => {
    const manager = new Manager('Magic Bryan', 123, 'MagicBryanNotTheSpider@gmail.com', 543);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});

test('Tests if the get functions return the appropriate data', () => {
    const manager = new Manager('Example', 123, 'Example.Email.com', 456);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.office.toString()));
});