import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
} from "../actions/types.js";

const initialState = {
  todos: {
    todoString: "Get milk for cake",
    isChecked: false
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
