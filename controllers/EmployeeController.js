const Employee = require("../models/Employee");
const bcrypt = require("bcrypt");

module.exports = class EmployeeController {
  static async register(req, res) {
    const { name, email, password, confirmPassword, cpf, role } = req.body;

    const checkIfUserExists = await Employee.findOne({ email: email });

    if (checkIfUserExists) {
      res.status(422).json({ message: "Email já utilizado" });
      return;
    }

    //crypt password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const employee = new Employee({
      name,
      email,
      password: passwordHash,
      cpf,
      role,
    });

    try {
      const newEmployee = await employee.save();

      //   await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }
};
