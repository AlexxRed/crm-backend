const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");``
const  ctrlWrapper  = require("../../services/ctrlWrapper");
// const validation = require("../../middlewares/validationUser");
// const authenticate = require("../../middlewares/authenticate");
// const { joiUserRegisterSchema, joiUserLoginSchema } = require("../../models/User");

router.post("/signup", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));

// router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
// router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router