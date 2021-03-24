import {
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "../actions/types.js";

const initialState = {
  todos: [
    {_id: '1',
      todoString: "Testing",
      isChecked: false},
      {_id: '2',
      todoString: "I love Testing",
      isChecked: false},
      {_id: '3',
      todoString: "Fuck Testing",
      isChecked: false},
  ],
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
