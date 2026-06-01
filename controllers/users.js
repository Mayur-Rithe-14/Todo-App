const Todo = require("../models/todo.js");
const User = require("../models/user.js");
const passport = require("passport");

module.exports.registerPage = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.registerUser = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const newUser = new User({
      username,
      email,
    });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    console.log("Signup Working");
    res.redirect("/login");
  } catch (e) {
    console.log("ERROR", e);
    res.send(e.message);
  }
};

module.exports.loginPage = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  console.log("Login Successfully");
  res.redirect("/todos");
};

module.exports.logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.redirect("/");
  });
};
