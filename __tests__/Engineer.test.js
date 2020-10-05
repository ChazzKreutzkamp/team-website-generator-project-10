const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 101, 'BoblinTheGoblin@gmail.com', 'Boblin');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('Tests if the get functions return the appropriate data', () => {
    const engineer = new Engineer('Example', 123, 'Example.Email.com', 'GitHubExample');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});