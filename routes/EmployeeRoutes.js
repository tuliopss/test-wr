const router = require("express").Router();

const employeeController = require("../controllers/EmployeeController");

router.get("/hello", employeeController.helloWorld);
router.get("/employees", employeeController.getEmployees);
router.get("/:id", employeeController.getEmployeeById);
router.post("/register", employeeController.register);
router.post("/login", employeeController.login);
router.patch("/:id", employeeController.editEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
