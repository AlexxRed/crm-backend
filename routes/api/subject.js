const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/subject");

const  ctrlWrapper  = require("../../services/ctrlWrapper");

router.get("/", ctrlWrapper(ctrl.getAll));

module.exports = router;