import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions"
import { clearErrors } from "../redux/actions/errorActions";


const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { error, msg } = useSelector((state) => state.error.msg);
  const id = useSelector((state) => state.error.id);
  
  useEffect(() => {
    if (id === "REGISTER_FAIL") {
      if (error) {
        setMessage(error);
      } else {
        setMessage(msg);
      }
    } else {
      setMessage(null);
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clearErrors());
      history.push("/");
    }
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
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
      <p class={"login__error_msg"}>{message}</p>
      <button onClick={login}>
          Login
        </button>
    </form>
  );
}

export default Register;