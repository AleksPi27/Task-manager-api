const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide a task name'],
        trim: true,
        minlength: 4,
        maxlength: [20, 'should specify less characters than 20'],
    },
    completed: {
        type: Boolean,
        default:false,
    },
});

module.exports = model('Task', TaskSchema)