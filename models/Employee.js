const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Employee = mongoose.model(
  "Employee",
  new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      cpf: { type: String, required: true },
      password: { type: String, required: true },
      role: { type: String, required: true },
      permission: { type: Boolean },
    },
    { timestamps: true }
  )
);

module.exports = Employee;
