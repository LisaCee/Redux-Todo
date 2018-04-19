export const ADD_TODO = 'ADD_TODO'

export const AddTodo =(text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}