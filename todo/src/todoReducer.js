import { ADD_TODO, TOGGLE_TODO } from './todoAction';

const todoReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.payload]
  case TOGGLE_TODO:
    return state.map(todo => (
      todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo
    ))
  default:
    return state;
  }
}

export default todoReducer;
