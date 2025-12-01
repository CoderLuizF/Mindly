const express = require("express");
const router = express.Router();

//Controller
const AuthController = require("../controllers/AuthController");

// Login
router.get("/login", AuthController.login);
router.post("/login", AuthController.loginPost);
// Register
router.get("/register", AuthController.register);
router.post("/register", AuthController.registerPost);
// Logout
router.get("/logout", AuthController.logout);

module.exports = router;
