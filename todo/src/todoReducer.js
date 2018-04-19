import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoAction';
import { v4 } from 'uuid';

const todoReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    const newTodo = {
      value: action.payload,
      completed: false,
      id: v4()
    }
    return [...state, newTodo]
  case TOGGLE_TODO:
    return state.map(todo => (
      todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo
    ))
  case DELETE_TODO:
    return state.filter(({ id }) => id !== action.payload)
  default:
    return state;
  }
}

export default todoReducer;
