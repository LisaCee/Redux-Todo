export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const DELETE_TODO = 'DELETE_TODO';


export const addTodo = () => {
    return { type: ADD_TODO, payload: newTodo}
};

export const completeTodo = () => {
    return { type: TOGGLE_TODO, payload: this.toggleTodo()}
};