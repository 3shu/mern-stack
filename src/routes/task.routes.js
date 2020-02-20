const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    //console.log(tasks);
    res.json({
        code: 200,
        status: 'received',
        tasks: tasks
    });
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    //console.log(task);
    res.json({
        code: 200,
        status: 'received',
        task: task
    });
});

router.post('/', async (req, res) => {
    //console.log(req.body);
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({
        code: 200,
        status: 'Task saved'
    });
});

router.put('/:id', async (req, res) => {
    //console.log(req.body);
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        code: 200,
        status: 'Task updated'
    });
});

router.delete('/:id', async (req, res) => {
    //console.log(req.body);
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        code: 200,
        status: 'Task deleted'
    });
});
module.exports = router;