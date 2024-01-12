const router = require("express").Router();

const employeeController = require("../controllers/EmployeeController");

router.get("/hello", employeeController.helloWorld);
router.get("/employees", employeeController.getEmployees);
router.post("/register", employeeController.register);
router.post("/login", employeeController.login);

module.exports = router;
