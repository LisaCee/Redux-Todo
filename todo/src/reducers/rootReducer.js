import {ADD_TODO} from './actions/actions'


export const todoReducer = (todos = [],action) => {
    switch(action.type) {
        case ADD_TODO:
            //return Object.assign()
        default:
            return todos
    }
}