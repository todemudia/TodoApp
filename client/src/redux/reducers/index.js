import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  error: errorReducer,
  auth: authReducer,
});

export default rootReducers;