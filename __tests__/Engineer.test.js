const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 101, 'BoblinTheGoblin@gmail.com', 'Boblin');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.job).toBe('Engineer');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})