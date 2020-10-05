const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Gnash', 123, 'GnashTheHugBear@gmail.com', 'Culinary School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('Tests if the get functions return the appropriate data', () => {
    const intern = new Intern('Example', 123, 'Example.Email.com', 'Example School');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});