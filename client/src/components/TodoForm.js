import React, { useState } from "react";
import { TextField, Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 todoBox: {
  margin: theme.spacing(0),
  padding: theme.spacing(0),
 },
 addButton: {
  display: "flex",
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
    <Grid container>
     <Grid item>
      <TextField
       className={classes.todoBox}
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
     </Grid>
     <Grid item alignItems="stretch" className={classes.addButton}>
      <Button size="large" color="primary" variant="contained">
       Add
      </Button>
     </Grid>
    </Grid>
   </form>
  </>
 );
};

export default TodoForm;
