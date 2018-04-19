import { ADD_TODO, TOGGLE_TODO } from "../actions/index.js";
const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case TOGGLE_TODO:
      return [...todos, action.payload];
    default:
      return todos;
  }
};

export { todosReducer };
