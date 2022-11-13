const express = require('express');

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddler = require("./middlewares/tasksMiddlewares");

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddler.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
    tasksMiddler.validateFieldTitle,
    tasksMiddler.validateFieldStatus,
    tasksController.updateTask);

module.exports = router;
