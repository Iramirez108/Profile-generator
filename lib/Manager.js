const Manager = require('./lib/Manager');

test('create a Manager object', () => {
    const manager = new Manager('Ivan', 90, 'ivan.ramirez10208@gmail.com', 1);
   
    expect(manager.officeNumber).toEqual(expect.any(number));
});

test('gets role of employee', () => {
    const manager = new Manager('Ivan', 90,'ivan.ramirez10208@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});