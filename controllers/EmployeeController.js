const createUserToken = require("../helpers/createUserToken");
const Employee = require("../models/Employee");
const bcrypt = require("bcrypt");

module.exports = class EmployeeController {
  static async helloWorld(req, res) {
    res.status(200).json({ message: "hello world" });
  }

  static async register(req, res) {
    const { name, email, password, confirmPassword, cpf, role } = req.body;

    const checkIfUserExists = await Employee.findOne({ email: email });
    try {
      if (checkIfUserExists) {
        return res.status(409).json({ message: "Email já utilizado" });
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

      const newEmployee = await employee.save();

      await createUserToken(newEmployee, req, res);

      // res.status(201).json(newEmployee);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email: email });

    if (!employee) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    const checkPassword = await bcrypt.compare(password, employee.password);

    if (!checkPassword) {
      res.status(422).json({ message: "Senha incorreta." });
      return;
    }

    await createUserToken(employee, req, res);
  }

  static async getEmployees(req, res) {
    const employees = await Employee.find();

    res.status(200).json(employees);
  }

  static async getEmployeeById(req, res) {
    const { id } = req.params;
    try {
      const employee = await Employee.findById(id);

      if (!employee) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }

      res.status(200).json(employee);
    } catch (error) {
      return res.status(422).json({ message: error });
    }
  }

  static async deleteEmployee(req, res) {
    const { id } = req.params;
    try {
      const employee = await Employee.findById(id);

      if (!employee) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }

      await employee.deleteOne({ _id: id });

      res.status(200).json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
      return res.status(422).json({ message: error });
    }
  }

  static async editEmployee(req, res) {
    const { id } = req.params;
    const { name, role, password } = req.body;

    const employee = await Employee.findById({ _id: id });

    if (!employee) {
      return res.status(404).json({ message: "Funcionário não encontrado." });
    }

    if (name) {
      employee.name = name;
    }
  }
};
