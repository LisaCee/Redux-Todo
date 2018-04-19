export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const DELETE_TODO = 'DELETE_TODO';


export const addTodo = (todos = [], action) => {
  // console.log('ADD_TODO');
  return { type: ADD_TODO, payload: 'TODO STRING'}// Fill in this function
};

export const completeTodo = () => {
  // console.log('ADD_TODO');
  return { type: TOGGLE_TODO, payload: this.toggleTodo()} // Fill in this function
};
