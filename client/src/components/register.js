import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/register', {'name': name, 'email': email, 'password': password}, {withCredentials: true})
    .then(function (response) {
        // handle success
        history.push("/");
        console.log(`Data Posted: ${response.data}`);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
  }

  const login = (e) => {
    e.preventDefault();
    history.push("/");
  };

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
      <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <button type="submit">Register</button>
      <button onClick={login}>
          Login
        </button>
    </form>
  );
}

export default Register;