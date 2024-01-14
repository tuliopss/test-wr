const Employee = require("../models/Employee");

const checkIfEmailExists = async (email, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ errors: ["erro"] });
  }
};

module.exports = checkIfEmailExists;
