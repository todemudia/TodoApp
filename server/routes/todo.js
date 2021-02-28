const express = require('express');
const router = express.Router();
const Todo = require('../model/todolist');


/******************** Routes Setup **********************/

// @route Get 
// @desc Get all todos
// @access Publics
router.get('/', function (req, res) {
    Todo.find()
    .then(todos => {
        res.send(todos);
    }).catch(err => {
        console.log(err);
    });
});

router.post('/', function (req, res) {
    const { todoString, isChecked } = req.body;
    const todo = new Todo ({
        todoString,
        isChecked
    });
    todo.save()
    .then(result => {
        res.status(200).json({'todo': 'todo added successfully'});
        console.log(`${result} added succesfully!`);
    }).catch(err => {
        res.status(400).send('adding new todo failed');
        console.log(err);
    });
});

router.post('/remove', function (req, res) {
    const delId = req.body.todoId;
    Todo.findByIdAndRemove(delId)
    .then(()=>{
        console.log('Item Deleted')
        res.redirect('/')
    })
    .catch(err=> console.log(err));

});

module.exports = router;