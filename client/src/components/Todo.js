import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



const Todo = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetchTodos();
    // eslint-disable-next-line
    }, []);

    const fetchTodos = () => {
        axios.get('http://localhost:5001/todo', {withCredentials: true})
        .then(function (response) {
            setItems(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    
    const addNewItem = (item) => {
      //Appends new data to the prev state
        const newData = {
            todoString: item,
            isChecked: false
        }
      axios.post('http://localhost:5001/todo/add', newData, {withCredentials: true})
        .then(function (response) {
            // handle success
            fetchTodos();
            console.log(`Data Posted: ${response.data}`);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    return (
        <div className='jumbotron jumbotron fluid'>
            <div className='container-fluid'>
            <h1 className='display-4 text-center'>Todoer</h1>
            <hr className='my-4' />        
            <TodoForm onSubmit={addNewItem}/>
            <TodoList items={items} />
            </div>
           
        </div>
    )
}

export default Todo;