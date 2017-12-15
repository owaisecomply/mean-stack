const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isComplete:{
        type: Boolean
    }
});


const todolist = mongoose.model('todo', todoListSchema);

module.exports = todolist;