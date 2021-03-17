import React from 'react'

const TodoItem = (props) => {
    return (
        <>  
            <li className='list-inline'>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <p> {props.itemValue} </p>
            </li>
        </>
    )
}

export default TodoItem;