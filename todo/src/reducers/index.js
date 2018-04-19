import { ADDTODO, TOGGLECOMPLETE } from '../actions';

export default (todos = [], action) => {
    switch ( (action.type)) {
        case ADDTODO:
            return todos.concat(action.payload);    
        case TOGGLECOMPLETE:
            const id = action.payload.id;
            return todos.map((todo) => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        default:
            return todos;
    }
}

