"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/newboard", ctrl.output.newboard);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/newboard", ctrl.process.register);

module.exports = router;
