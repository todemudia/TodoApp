const express = require('express');
const router = express.Router();
const Todo = require('../model/todolist');

/******************** Routes Setup **********************/

router.post('/', function (req, res) {
    if (!req.user) {
        res.send({'message': 'No user logged in'})
        res.redirect('/login');
        return;
    }
    console.log(req.user._id);
    Todo.find({'userFrom': req.user._id})
    .then(todos => {
        res.send(todos);
    }).catch(err => {
        console.log(err);
    });
});

router.post('/add', function (req, res) {
    if (!req.user) {
        res.redirect('/login');
        return;
    }
    const { todoString, isChecked } = req.body;
    const todo = new Todo ({
        userFrom: req.user._id,
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
    if (!req.user) {
        res.redirect('/login');
        return;
    }
    const delId = req.body.todoId;
    Todo.findByIdAndRemove(delId)
    .then(()=>{
        console.log('Item Deleted')
        res.redirect('/')
    })
    .catch(err=> console.log(err));
});

module.exports = router;