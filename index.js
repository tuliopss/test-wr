const express = require("express");
const conn = require("./db/conn.js");
const cors = require("cors");

require("dotenv").config();

const app = express();

const EmployeeRoutes = require("./routes/EmployeeRoutes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/employee", EmployeeRoutes);

// conn.main();

app.listen(3000);
