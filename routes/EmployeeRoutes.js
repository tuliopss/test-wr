const router = require("express").Router();

const employeeController = require("../controllers/EmployeeController");
const authGuard = require("../middlewares/authGuard");
const {
  empRegisterValidations,
  empLoginValidation,
  empEditValidations,
  empCreateValidations,
} = require("../middlewares/employeeValidations");
const validate = require("../middlewares/handleValidations");
const verifyPermission = require("../middlewares/verifyPermission");

router.get("/", authGuard, employeeController.getEmployees);
router.get("/getProfile", authGuard, employeeController.currentUser);

router.get("/:id", authGuard, employeeController.getEmployeeById);

router.post(
  "/register",
  empRegisterValidations(),
  validate,
  employeeController.register
);

router.post("/login", empLoginValidation(), validate, employeeController.login);

router.post(
  "/create",
  authGuard,
  empCreateValidations(),
  validate,
  verifyPermission,
  employeeController.createEmployee
);
router.patch(
  "/edit/:id",
  authGuard,
  // verifyPermission,
  employeeController.editEmployee
);
router.patch(
  "/permission/:id",
  authGuard,
  verifyPermission,
  employeeController.givePermission
);

router.delete(
  "/delete/:id",
  authGuard,
  verifyPermission,
  employeeController.deleteEmployee
);

module.exports = router;
