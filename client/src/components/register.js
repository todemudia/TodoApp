import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";
import {Button, Container} from '@material-ui/core';


const Register = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div>
      <label>Password</label>
      <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <Button type="submit">Register</Button>
      <Button href='/'>
        Login
      </Button>
    </form>
  );
}

export default Register;