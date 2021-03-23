import axios from 'axios';
import { returnErrors } from "./errorActions";
import { 
    GET_TODOS_SUCCESS,
    GET_TODOS_FAIL, 
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAIL } 
from './types.js';

export const getTodos  = () => (dispatch) => {
    axios.get('http://localhost:5001/todo', {withCredentials: true})
        .then((res) => dispatch({
            type: GET_TODOS_SUCCESS,
            payload: res.data,
        })
    )
    .catch((err) => {
        dispatch(
            returnErrors(err.response.data, err.response.status, "GET_TODOS_FAIL")
        );
        dispatch({
            type: GET_TODOS_FAIL,
          });
    })
};

export const addTodos = (newData) => (dispatch) => {
    axios.get('http://localhost:5001/todo/add', newData , {withCredentials: true})
        .then((res) => dispatch({
            type: ADD_TODO_SUCCESS,
            payload: res.data,
        })
    )
    .catch((err) => {
        dispatch(
            returnErrors(err.response.data, err.response.status, "ADD_TODO_FAIL")
        );
        dispatch({
            type: ADD_TODO_FAIL,
          });
    })
};