import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/login/', {'email': email, 'password': password}, {withCredentials: true})
    .then(function (response) {
        // handle success
        console.log(response.data);
        history.push("/todo");
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
  }

  const register = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <button type="submit">Login</button>
      <button onClick={register}>
          Register
        </button>
    </form>
  );
}

export default Login;