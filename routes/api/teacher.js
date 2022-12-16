const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/teacher");
const  ctrlWrapper  = require("../../services/ctrlWrapper");


router.post("/", ctrlWrapper(ctrl.addTeacher));
router.get("/", ctrlWrapper(ctrl.getTeacher));

module.exports = router;