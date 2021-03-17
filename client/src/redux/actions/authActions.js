import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// check token and load user

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5001/auth/user", { withCredentials: true })
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

/***********Register User *************/
export const register = (name, email, password) => (dispatch) => {
  //Request Body
  axios
    .post(
      "http://localhost:5001/auth/register/",
      { name, email, password },
      { withCredentials: true }
    )
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = (email, password) => (dispatch) => {

  //Request Body
  axios
    .post("http://localhost:5001/auth/login/", 
    { email, password }, 
    { withCredentials: true })
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//log user out
export const logout = () => {
  axios
  .post("http://localhost:5001/auth/logout/", 
  { withCredentials: true })
  .then(() => (dispatch) =>
    dispatch({
      type: LOGOUT_SUCCESS,
    })
  )
};
