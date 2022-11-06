const express = require("express");
const router = express.Router();

const getAllUser = require("../controller/user/getAllUser");
const getLoggedInUser = require("../controller/user/getLoggedInUser");
const loginUser = require("../controller/user/loginUser");
const signUpUser = require("../controller/user/signUpUser");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", getAllUser);
router.post("/signup", signUpUser);
router.get("/login", loginUser);
router.get("/getLoggedInUser",verifyToken, getLoggedInUser);

module.exports = router;
