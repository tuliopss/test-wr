const { body } = require("express-validator");

const employeeValidations = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 2 })
      .withMessage("O nome precisa de no mínimo 2 caracteres"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório")
      .isEmail()
      .withMessage("Insira um email válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória")
      .isLength({ min: 3 })
      .withMessage("A senha precisa de no mínimo 3 caracteres"),
    body("confirmPassword")
      .isString()
      .withMessage("Confirme sua senha.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
    body("role").isString().withMessage("A função é obrigatória"),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um email válido"),
    body("password").isString().withMessage("A senha é obrigatória"),
  ];
};

const employeeEditValidations = () => {
  return [
    body("nome")
      .optional()
      .isLength(2)
      .withMessage("O nome precisa ter no mínimo 2 caracteres"),

    body("password")
      .optional()
      .isLength({ min: 5 })
      .withMessage("A senha precisa de no mínimo 5 caracteres"),

    // body("confirmPassword")
    //   .optional()
    //   .withMessage("Confirme sua senha.")
    //   .custom((value, { req }) => {
    //     if (value != req.body.password) {
    //       throw new Error("As senhas não são iguais.");
    //     }
    //     return true;
    //   }),
  ];
};
module.exports = {
  employeeValidations,
  loginValidation,
  employeeEditValidations,
};
