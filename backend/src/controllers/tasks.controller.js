import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id })
      .populate("user")
      .sort({ date: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description, date, completed } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      date,
      completed,
      user: req.user.id,
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(200).json(task);
};
