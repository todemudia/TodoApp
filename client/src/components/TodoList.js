import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <>
            <ul className='list-inline '>
                {props.items.map(item => <TodoItem itemValue={item.todoString}/>)}
            </ul>
        </>
    )
}

export default TodoList;