const router = require("express").Router();

const employeeController = require("../controllers/EmployeeController");
const authGuard = require("../middlewares/authGuard");
const { employeeValidations } = require("../middlewares/employeeValidations");
const validate = require("../middlewares/handleValidations");

router.get("/hello", employeeController.helloWorld);
router.get("/employees", authGuard, employeeController.getEmployees);
router.get("/:id", employeeController.getEmployeeById);
router.post(
  "/register",
  employeeValidations(),
  validate,
  employeeController.register
);
router.post("/login", employeeController.login);
router.patch("/:id", employeeController.editEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
