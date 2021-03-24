import React, { useState } from "react";
import { register } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Grid, Link, Container, Typography, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormGroup from '@material-ui/core/FormGroup';
import Avatar from '@material-ui/core/Avatar';
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

const Register = () => {
  const classes = useStyles();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
    history.push('/todo');
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
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
          <FormGroup>
              <TextField 
                id="name" 
                label="Name" 
                type="name"
                margin="normal"
                variant="outlined"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                autoComplete="name"
                fullWidth
                autoFocus
                required
              />
            </FormGroup>
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
                Register
              </Button>
            </FormGroup>
            <Grid container>
              <Grid item xs>
                <Link href="forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Register;