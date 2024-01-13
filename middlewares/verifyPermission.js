const Employee = require("../models/Employee");

const verifyPermission = async (req, res, next) => {
  const employee = req.user;
  // console.log(employee);
  const hasPermission = employee.permission;
  // console.log(hasPermission);
  // res.json(hasPermission);
  if (!hasPermission) {
    return res.status(422).json({ errors: ["Usuário sem autorização."] });
  }

  next();
};

module.exports = verifyPermission;
