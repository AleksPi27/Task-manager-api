const Task = require('../models/task')
const express = require('express');
const asyncWrapper = require ('../middleware/async');
const createCustomError = require('../errors/customError');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
    // res.send('all items from the file')
})

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        next(createCustomError(`No task with such id: ${taskID}`));
        // res.status(404).json(`No task with such id: ${taskID}`);
    }
    res.status(200).json({ task });
}
)
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task)
})

const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task) {
        next(createCustomError(`No task with such id: ${taskID}`));
        // res.status(404).json(`No task with such id: ${taskID}`);
    }
    res.status(200).json({ task });
}
)
const editTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true, overwrite: true });
    if (!task) {
        next(createCustomError(`No task with such id: ${taskID}`));
        // res.status(404).json(`No task with such id: ${taskID}`);
    }
    res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        next(createCustomError(`No task with such id: ${taskID}`));
        // res.status(404).json({ error: `No task with such id: ${req.params.id}` });
    }
    res.status(`201`).json({ task });
})

module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask, editTask
}