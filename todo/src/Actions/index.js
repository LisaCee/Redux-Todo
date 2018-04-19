export const  ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = () => {
  // Fill in this function
  return {
    type: ADD_TODO,
    payload: "todo"
  }
};

export const toggleTodo = () => {
  // Fill in this function
  return {
    type: TOGGLE_TODO,
    payload: "todo"
  }
};