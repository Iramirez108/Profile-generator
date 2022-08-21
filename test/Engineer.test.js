const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
    
    const engineer = new Engineer('Ivan', 80, 'ivan.ramirez10208@gmail', 'iramirez108');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Ivan', 80, 'ivan.ramirez10208@gmail', 'iramirez108');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Ivan', 80, 'ivan.ramirez10208@gmail', 'iramirez108');

    expect(engineer.getRole()).toEqual("Engineer");
});