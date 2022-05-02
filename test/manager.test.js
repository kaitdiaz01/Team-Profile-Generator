const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  it("Begin the instance of manager", () => {
    const e = new Manager();
    expect(typeof e).toBe("object");
  });
  it("can set a name with a constructor argument", () => {
    const name = "Rocket";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });
  it("can set an ID with a constructor argument", () => {
    const id = 12;
    const e = new Manager("Rocket", 12);
    expect(e.id).toBe(id);
  });

  it("can set an email with a construcor argument", () => {
    const email = "rocket@test.com";
    const e = new Manager("Rocket", 123, email);
    expect(e.email).toBe(email);
  });
  it("can set an office number with a construcor argument", () => {
    const officeNumber = 123;
    const e = new Manager("Rocket", 123, "rocket@test.com", 123);
    expect(e.officeNumber).toBe(officeNumber);
  });
});
