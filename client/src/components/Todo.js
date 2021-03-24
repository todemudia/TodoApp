import { useHistory } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodos } from "../redux/actions/todoActions";
import { clearErrors } from "../redux/actions/errorActions";
import CssBaseline from '@material-ui/core/CssBaseline';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Nav from './nav';

const Todo = () => {
    //const [todos, setTodos] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { todos } = useSelector((state) => state.todos);

    useEffect(() => {
        fetchTodos();
    // eslint-disable-next-line
    }, []);

    const fetchTodos = () => {
        dispatch(getTodos());
    }
    
    const addNewItem = (todoString) => {
        const newData = {
            todoString,
            isChecked: false
        }
        dispatch(addTodos(newData));
    }

    return (
        <>
            <Nav/>
            <CssBaseline />
            <div className='  '>
                <div className='-'>    
                    <TodoForm onSubmit={addNewItem}/>
                    <TodoList todos={todos} />
                </div>
            </div>
        </>
    )
}

export default Todo;