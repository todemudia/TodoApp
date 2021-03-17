import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";
import { clearErrors } from "../redux/actions/errorActions";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { error, msg } = useSelector((state) => state.error.msg);
  const id = useSelector((state) => state.error.id);

  useEffect(() => {
    if (id === "LOGIN_FAIL") {
      error ? setMessage(error) : setMessage(msg);
    }
  }, [msg]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clearErrors());
      history.push("/todo");
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));

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
      <p class={"login__error_msg"}>{message}</p>
      <button onClick={register}>
          Register
        </button>
    </form>
  );
}

export default Login;