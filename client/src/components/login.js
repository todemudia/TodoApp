import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { Grid, Link, Container, Typography, TextField, Button, FormGroup, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Nav from './nav';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
    <>
    <Nav/>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormGroup>
              <TextField 
                id="email" 
                label="Email Address" 
                type="email"
                margin="normal"
                variant="outlined"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                autoComplete="email"
                fullWidth
                autoFocus
                required
              />
            </FormGroup>
            <FormGroup>
              <TextField 
                id="password" 
                label="Password" 
                type="password"
                value={password}
                margin="normal"
                autoComplete="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
            </FormGroup>
            <FormGroup>
              <Button 
                className={classes.submit}
                fullWidth
                variant="contained"
                color="primary"
                type="submit">
                Login
              </Button>
            </FormGroup>
            <Grid container>
              <Grid item xs>
                <Link href="forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;