import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <>
            <ul className='list-inline '>
                {props.todos.map(todo => <TodoItem key={todo._id} todoString={todo.todoString} isChecked={todo.isChecked}/>)}
            </ul>
        </>
    )
}

export default TodoList;