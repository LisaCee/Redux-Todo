import { ADDTODO, TOGGLECOMPLETE, DELETETODO } from '../actions';

export default (todos = [], action) => {
    switch ( (action.type)) {
        case ADDTODO:
            return todos.concat(action.payload);    
        case TOGGLECOMPLETE:
            let id = action.payload.id;
            return todos.map((todo) => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        case DELETETODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

