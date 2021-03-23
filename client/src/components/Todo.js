import { useHistory } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodos } from "../redux/actions/todoActions";
import { clearErrors } from "../redux/actions/errorActions";
import TodoList from './TodoList';
import TodoForm from './TodoForm';



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
        <div className='jumbotron jumbotron fluid'>
            <div className='container-fluid'>
                <h1 className='display-4 text-center'>Todoer</h1>
                <hr className='my-4' />        
                <TodoForm onSubmit={addNewItem}/>
                <TodoList todos={todos} />
            </div>
           
        </div>
    )
}

export default Todo;