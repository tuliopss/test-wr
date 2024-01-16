const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
const jwtSecret = process.env.JWT_SECRET;

const getUserByToken = async (token) => {
  if (!token) {
    return res.status(201).json({ message: "Acesso negado." });
  }

  const decoded = jwt.verify(token, jwtSecret);
  const userId = decoded.id;
  const user = await Employee.findById(userId);
  // console.log(user);
  // console.log("get,", user);

  return user;
};

module.exports = getUserByToken;
