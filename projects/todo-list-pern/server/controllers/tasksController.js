const asyncHandler = require('express-async-handler');

// connect to db
const pool = require('../config/db');

// @route			GET /api/tasks
// @desc			get all tasks
// @access		public
const getTasks = asyncHandler(async (req, res) => {
  const queryString = 'SELECT * FROM task';
  const { rows } = await pool.query(queryString);

  res.status(200).json(rows);
});

// @route			POST /api/tasks
// @desc			create task
// @access		public
const createTask = asyncHandler(async (req, res) => {
  const { task } = req.body;

  // error handling
  if (!task) {
    res.status(400);
    throw new Error('Please add a task.');
  }

  // add to db
  const queryString = 'INSERT INTO task (task) VALUES ($1) RETURNING *';
  const { rows } = await pool.query(queryString, [task]);
  res.status(200).json(rows);
});

// @route			PUT /api/tasks
// @desc			update task
// @access		public
const updateTask = asyncHandler(async (req, res) => {
  const { task, done } = req.body;
  const { id } = req.params;

  // error handling
  if (!task) {
    res.status(400);
    throw new Error('Please add a task.');
  }

  // update to db
  const queryString =
    'UPDATE task SET task = $1, done = $2 WHERE id = $3 RETURNING *';
  const { rows } = await pool.query(queryString, [task, done, id]);
  res.status(200).json(rows);
});

// @route			DELETE /api/tasks
// @desc			delete task
// @access		public
const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // delete from db
  const queryString = 'DELETE FROM task WHERE id = $1 RETURNING *';
  await pool.query(queryString, [id]);
  res.status(200).json('Task successfully deleted.');
});

module.exports = { getTasks, createTask, updateTask, deleteTask };
