export const ADD_TODO = 'ADD_TODO'

const addTodo = (item) => {
  console.log("Action Item: ", item);

  return {
    type: ADD_TODO,
    payload: item,
  }
}

export default addTodo;

