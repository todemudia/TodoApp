import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodos } from "../redux/actions/todoActions";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TodoForm from "./TodoForm";
import Nav from "./nav";
import TodoItem from "./TodoItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3),
  },
  todoBox: {
    width: "50%",
  },
}));

const Todo = () => {
  const classes = useStyles();

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
  };

  const addNewItem = (todoString) => {
    const newData = {
      todoString,
      isChecked: false,
    };
    dispatch(addTodos(newData));
  };

  return (
    <>
      <Nav />
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.todoBox}>
          <TodoForm onSubmit={addNewItem} />
          <div>
            {todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todoString={todo.todoString}
                isChecked={todo.isChecked}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
