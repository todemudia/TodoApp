import {
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "../actions/types.js";

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return { todos: [...state.todos, ...action.payload] }
    case ADD_TODO_SUCCESS:
      return [...state.todos, action.payload]
    case DELETE_TODO_SUCCESS:
      return [...state.todos, action.payload]
      case GET_TODOS_FAIL:
      case ADD_TODO_FAIL:
      case DELETE_TODO_FAIL:
        return {
          ...state,
        }
    default:
      return state;
  }
}
