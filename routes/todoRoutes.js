const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.js");
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn} = require("../middleware.js");
const todoControllers = require("../controllers/todos.js");

/* ========== TODO ROUTES ========== */

// Index Route
router.get("/", isLoggedIn, wrapAsync(todoControllers.index));

// New Route
router.get("/new", isLoggedIn, todoControllers.newTodo);

// Create Route
router.post("/", isLoggedIn, wrapAsync(todoControllers.createTodo));

// Show Route
router.get("/:id", isLoggedIn, wrapAsync(todoControllers.showTodo));

// Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(todoControllers.editTodo));

router.post(
  "/:id/toggle",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const todo = await Todo.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    todo.completed = !todo.completed;
    await todo.save();
    res.redirect("/todos");
  }),
);

// Update Route
router.put("/:id", isLoggedIn, wrapAsync(todoControllers.updateTodo));

// Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(todoControllers.deleteTodo));

module.exports = router;
