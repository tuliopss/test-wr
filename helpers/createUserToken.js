const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    jwtSecret
  );

  res.status(201).json({
    message: "Usuário autenticado.",
    token: token,
    userId: user._id,
  });
};

module.exports = createUserToken;
