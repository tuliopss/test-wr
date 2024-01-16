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

router.get("/", employeeController.getEmployees);
router.get("/getProfile", authGuard, employeeController.currentUser);

router.get("/:id", employeeController.getEmployeeById);

router.post(
  "/register",
  empRegisterValidations(),
  validate,
  employeeController.register
);

router.post("/login", empLoginValidation(), validate, employeeController.login);

router.post(
  "/create",
  empCreateValidations(),
  validate,
  employeeController.createEmployee
);
// router.post("/login", employeeController.login);
router.patch(
  "/edit/:id",
  authGuard,
  verifyPermission,
  employeeController.editEmployee
);
router.patch(
  "/permission/:id",
  authGuard,
  // verifyPermission,
  employeeController.givePermission
);

router.delete(
  "/:id",
  authGuard,
  verifyPermission,
  employeeController.deleteEmployee
);

module.exports = router;
