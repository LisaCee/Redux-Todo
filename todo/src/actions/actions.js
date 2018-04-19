export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';

//ADD_TODO = {type:ADD_TODO,payload:{title,content}}
export const addTodo =(title,todo) => {
    return {
        type: ADD_TODO,
        payload: 
        {
            title,
            todo
        }
    }
}

export const getTodos = (todos) => {
    console.log(todos)
    return{
    type:GET_TODOS
    }
}