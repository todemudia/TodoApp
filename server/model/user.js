const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [1, 'Must Enter a Name'],
      },
    email: {
        type: String,
        required: true,
        min: [1, 'Must Enter an Email'],
      },
    password: {    
        type: String,
        requred: true,
        min: [1, 'Must Enter a Password'],
    },
});

module.exports = mongoose.model('User', userSchema);