const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    author: String,
    content: String
})

exports.TaskModel = mongoose.model('Task', TaskSchema);