const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/salary");
const  ctrlWrapper  = require("../../services/ctrlWrapper");

router.get("/", ctrlWrapper(ctrl.getSalary));
route.get("/", ctrlWrapper(ctrl.getBySubject));

module.exports = router;