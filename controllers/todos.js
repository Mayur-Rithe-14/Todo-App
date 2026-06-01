const Todo = require("../models/todo.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn} = require("../middleware");

module.exports.index = async (req, res) => {
  const allTodos = await Todo.find({
    owner: req.user._id,
  });

  const completedTodos = allTodos.filter((todo) => todo.completed).length;
  const productivity =
    allTodos.length === 0
      ? 0
      : Math.round((completedTodos / allTodos.length) * 100);
  res.render("todos/index.ejs", {
    allTodos,
    completedTodos,
    productivity,
  });
};

module.exports.newTodo = (req, res) => {
  res.render("todos/new.ejs");
};

module.exports.createTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.owner = req.user._id;
  await newTodo.save();
  res.redirect("/todos");
};

module.exports.showTodo = async (req, res) => {
  // const todo = await Todo.findById(req.params.id);
  const todo = await Todo.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });
  res.render("todos/show.ejs", {todo});
};

module.exports.editTodo = async (req, res) => {
  // const todo = await Todo.findById(req.params.id);
  const todo = await Todo.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });
  res.render("todos/edit.ejs", {todo});
};

module.exports.updateTodo = async (req, res) => {
  // const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
  await Todo.findOneAndUpdate(
    {
      _id: req.params.id,
      owner: req.user._id,
    },
    req.body,
  );
  res.redirect("/todos");
};

module.exports.deleteTodo = async (req, res) => {
  // const todo = await Todo.findByIdAndDelete(req.params.id);
  await Todo.findOneAndDelete({
    _id: req.params.id,
    owner: req.user._id,
  });
  res.redirect("/todos");
};
