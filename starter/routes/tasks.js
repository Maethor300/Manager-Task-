const express = require('express');
const router = express.Router();
const { getAllTask,
    postTasks,
    getTask,
    updateTask,
    deleteTask} = require('../controllers/tasks.js')
 
router.route('/').get(getAllTask).post(postTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports =  router;