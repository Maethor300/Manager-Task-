const express = require('express');
const router = express.Router();
const { getAllTask,
    postTasks,
    getTask,
    updateTask,
    deleteTask} = require('../controllers/tasks.js')
 
router.route('/').get(getAllTask);
router.route('/').post(postTasks);
module.exports =  router;