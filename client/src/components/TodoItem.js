import React from "react";
import { Checkbox, IconButton, makeStyles, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  todoItemLIne: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(2, 0),
    textAlign: "center",
    width: "100%",
  },
  todoString: {},
  todoCheckBox: {
    backGroundcolor: "primary",
  },
  todoDeleteButton: {
    color: "#ff726f",
  },
}));

const TodoItem = (props) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.todoItemLIne}>
        <Checkbox
          value={props.isChecked}
          className={classes.todoCheckBox}
          id={props._id}
        />
        <p className={classes.todoString}>{props.todoString}</p>
        <IconButton className={classes.todoDeleteButton}>
          <DeleteIcon className={classes.todoDeleteButton} />
        </IconButton>
      </Paper>
    </>
  );
};

export default TodoItem;
