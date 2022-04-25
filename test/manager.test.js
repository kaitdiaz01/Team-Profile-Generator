const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//can set office number
describe("Set office number via constructor argument", () => {
    const office = 100;
    const e = new Manager("Ricky", 1, "ricky@doge.com", office);
    expect(e.officeNumber).toBe(testVal);
})