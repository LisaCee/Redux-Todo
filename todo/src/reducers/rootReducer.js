import {ADD_TODO,GET_TODOS} from '../actions/actions'

//TODOS = [{id,title,content}]
//ADD_TODO = {type:ADD_TODO,payload:{title,content}}

export const todoReducer = (todos = [],action) => {
    switch(action.type) {
        case GET_TODOS:
            return todos
        case ADD_TODO:
            return todos.concat(action.payload)
        default:
            return todos

    }
}