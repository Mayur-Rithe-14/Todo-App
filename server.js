require("dotenv").config();

/* ========== Packages ========== */

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const ejsMate = require("ejs-mate");
const {isLoggedIn} = require("./middleware.js");

/* ========== DATABASE CONNECTION LOGIC ========== */

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");

    app.listen(8080, () => {
      console.log("Sever is Runing");
    });
  } catch (err) {
    console.log("DB Connection Failed", err);
  }
}

/* ========== MIDDLEWARES ========== */

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

/* ========== PASSPORT MIDDLEWARE ========== */

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

/* ========== ROUTES ========== */

app.use("/todos", todoRoutes);
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.render("todos/home");
});

/* ========== ERROR HANDERLS ========== */

app.use((err, req, res, next) => {
  let {message = "Something went wrong"} = err;
  res.status(500).send(message);
});

main();
