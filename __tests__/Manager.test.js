const Manager = require('../lib/Manager.js');

test('creates an Intern object', () => {
    const manager = new Manager('Magic Bryan', 123, 'MagicBryanNotTheSpider@gmail.com', 543);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.job).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});