const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Gnash', 123, 'GnashTheHugBear@gmail.com', 'Culinary School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.job).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});