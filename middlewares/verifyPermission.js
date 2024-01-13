const Employee = require("../models/Employee");

const verifyPermission = async (req, res, next) => {
  const employee = req.user;

  const hasPermission = employee.permission;

  if (!hasPermission) {
    return res.status(422).json({ errors: ["Usuário sem autorização."] });
  }

  next();
};

module.exports = verifyPermission;
