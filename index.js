const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const app = express();

//const server = http.createServer(app);

// const io = new Server(server);

// const io = new Server(server, {});

const EmployeeRoutes = require("./routes/EmployeeRoutes.js");

// io.on("connection", (socket) => {
//   console.log(socket.id);
// });

app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/employee", EmployeeRoutes);

app.listen(3000);
// io.listen(3000);
