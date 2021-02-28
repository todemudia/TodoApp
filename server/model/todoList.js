const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
    todoString: {
        type: String,
        required: true,
        min: [1, 'Must Enter a todo item'],
      },
    isChecked: {    
        type: Boolean,
        requred: false //change later to true
    },
});

module.exports = mongoose.model('Todo', todoSchema);