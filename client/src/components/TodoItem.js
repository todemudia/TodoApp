import React from 'react'

const TodoItem = (props) => {
    return (
        <>  
            <li className='list-inline'>
                <input type="checkbox" value={props.isChecked} id={props._id} />
                <p> {props.todoString} </p>
            </li>
        </>
    )
}

export default TodoItem;