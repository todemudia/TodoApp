const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    password: {    
        type: String,
        requred: true,
    },
});

module.exports = mongoose.model('User', userSchema);