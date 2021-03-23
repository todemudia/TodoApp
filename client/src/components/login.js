import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import {Button, TextField} from '@material-ui/core'
import { Grid, Link, Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));



const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push('/todo')
  }


  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField 
        id="outlined-basic" 
        label="Email Address" 
        type="email"
        margin="normal"
        fullWidth
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
        autoComplete="email"
        autoFocus
      />
      <TextField 
        id="outlined-basic" 
        label="Password" 
        type="password"
        value={password}
        margin="normal"
        autoComplete="password"
        fullWidth
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <Button 
        fullWidth
        variant="contained"
        color="primary"
        type="submit">
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="forgot" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
    </div>
    </Container>
  );
}

export default Login;