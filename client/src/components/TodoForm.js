import React, { useState } from "react";
import { TextField, FormGroup, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  todoFormContainer: {
    display: "flex",
    flexFlow: "row",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  todoField: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
}));

const TodoForm = (props) => {
  const classes = useStyles();
  const [item, setItem] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    props.onSubmit(item);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormGroup className={classes.todoFormContainer}>
          <TextField
            className={classes.todoField}
            id="todoString"
            type="text"
            margin="normal"
            placeholder="Enter todo..."
            variant="outlined"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            fullWidth
            autoFocus
            required
          />
          <Button
            className={classes.addButton}
            size="large"
            color="primary"
            variant="contained"
          >
            Add
          </Button>
        </FormGroup>
      </form>
    </>
  );
};

export default TodoForm;
