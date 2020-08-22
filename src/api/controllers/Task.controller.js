const { TaskModel } = require('../models/Task.model');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find()
        res.status(200).json({ result: tasks })
    } catch (error) {
        res.status(400).json({ result: 'Hubo un error'})
    }  
}

exports.setTask = async (req, res) => {
    try {
        const {title, author, content} = req.body;
        const task = new TaskModel({
            title,
            author,
            content
        })
        const result = await task.save()
        res.status(200).json({ result })
    } catch (error) {
        res.status(400).json({ result: 'Hubo un error'})
    }
}