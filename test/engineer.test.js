const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Begin the instance of Engineer", () => {
      const e = new Engineer();
      expect(typeof e).toBe("object");
    });
    it("can set a name with a constructor argument", () => {
      const name = "Tom";
      const e = new Engineer(name);
      expect(e.name).toBe(name);
    });
    it("can set an ID with a constructor argument", () => {
      const id = 30;
      const e = new Engineer("Rocket", id);
      expect(e.id).toBe(id);
    });
  
    it("can set an email with a construcor argument", () => {
      const email = "tom@test.com";
      const e = new Engineer("Lola", 123, email);
      expect(e.email).toBe(email);
    });
    it("can set a github username with a construcor argument", () => {
      const github = "kaitdiaz01";
      const e = new Engineer("Rocket", 123, "rocket@test.com", github);
      expect(e.github).toBe(github);
    });
  });
  