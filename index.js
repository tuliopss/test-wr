const express = require("express");
const conn = require("./db/conn.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.listen(5000);
