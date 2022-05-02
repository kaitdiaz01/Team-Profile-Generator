// require the employee from the lib folder
const Employee = require("../lib/Employee");

//test can begin employee instance
describe("Employee", () => {
  it("Begin the instance of employee", () => {
    const e = new Employee();
    // expect(new Employee(e)).toBe("object");
    expect(typeof e).toBe("object");
  });
  it("can set a name with a constructor argument", () => {
    const name = "Rocket";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  it("can set an ID with a constructor argument", () => {
    const id = 12;
    const e = new Employee("Rocket", 12);
    expect(e.id).toBe(id);
  });

  it("can set an email with a construcor argument", () => {
    const email = "rocket@test.com";
    const e = new Employee("Rocket", 123, email);
    expect(e.email).toBe(email);
  });
});
