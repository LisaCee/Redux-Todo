import { ADDTODO } from '../actiobns';




export default (todos = [], action) => {
    switch ( (action.type)) {
        case ADDTODO:
            return todos.concat(action.data).
            
    
        default:
            return todos;
    }