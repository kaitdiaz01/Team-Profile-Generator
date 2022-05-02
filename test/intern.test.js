const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Begin the instance of intern", () => {
      const e = new Intern();
      expect(typeof e).toBe("object");
    });
    it("can set a name with a constructor argument", () => {
      const name = "Lola";
      const e = new Intern(name);
      expect(e.name).toBe(name);
    });
    it("can set an ID with a constructor argument", () => {
      const id = 17;
      const e = new Intern("Rocket", id);
      expect(e.id).toBe(id);
    });
  
    it("can set an email with a construcor argument", () => {
      const email = "lola@test.com";
      const e = new Intern("Lola", 123, email);
      expect(e.email).toBe(email);
    });
    it("can set a school with a construcor argument", () => {
      const school = "Hofstra University";
      const e = new Intern("Rocket", 123, "rocket@test.com", school);
      expect(e.school).toBe(school);
    });
  });
  