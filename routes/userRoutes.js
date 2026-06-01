const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.js");
const userControllers = require("../controllers/users.js");

/* ========== USER ROUTES ========== */

// REGISTER PAGE
router.get("/signup", userControllers.registerPage);

// REGISTER USER
router.post("/signup", userControllers.registerUser);

// LOGIN PAGE
router.get("/login", userControllers.loginPage);

// LOGIN USER
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  userControllers.loginUser,
);

// LOGOUT
router.get("/logout", userControllers.logoutUser);

module.exports = router;
