import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoAction';
import { v4 } from 'uuid';

const storage = JSON.parse(localStorage.getItem('todos')) || [];

const addToLocalStorage = newTodo => {
  storage.push(newTodo)
  localStorage.setItem('todos', JSON.stringify(storage))
}

const todoReducer = (state = storage, action) => {
  switch (action.type) {
  case ADD_TODO:
    const newTodo = {
      value: action.payload,
      completed: false,
      id: v4()
    }
    addToLocalStorage(newTodo)
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
