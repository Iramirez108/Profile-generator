const intern = require('./lib/Intern');

test('create an Intern object', () => {
    const intern = new Intern('Ivan', 60, 'ivan.ramirez10208@gmail.com', 'CLC');

    expect(intern.school).toEqual(expect.any(string));
});

test('gets employee school',() => {
    const intern = new Intern('Ivan', 60, 'ivan.ramirez10208@gmail.com', 'CLC');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 