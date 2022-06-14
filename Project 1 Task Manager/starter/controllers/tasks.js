const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("All Tasks from Controllers");
};

const createTask = async (req, res) => {
  try {
    // res.send("Create Task");
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.send(eror)
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
