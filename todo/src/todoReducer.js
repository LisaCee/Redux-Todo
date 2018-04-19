import { ADD_TODO, TOGGLE_TODO } from './todoAction';

const todoReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.payload]
  case TOGGLE_TODO:
    const newState = state;
    newState[action.payload].completed = true;
    return newState;
  default:
    return state;
  }
}

export default todoReducer;
