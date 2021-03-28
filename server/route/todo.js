const express = require("express");
const todo = require("../model/todo.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await todo.find();
  try {
    res.json(todos);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  const { note } = await req.body;
  const newTodo = new todo(note);
  try {
    newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
