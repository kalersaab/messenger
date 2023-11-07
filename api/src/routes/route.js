const express = require("express");
const router = express.Router();
const CreateUser = require("../controller/create.user");
const loginUser = require("../controller/login.user");
router.post("/register", CreateUser);
router.post("/login", loginUser);
module.exports = router;
