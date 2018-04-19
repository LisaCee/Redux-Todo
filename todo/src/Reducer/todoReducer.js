import { ADD_TODO, TOGGLE_COMPLETED } from '../Actions';

export default(state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
        // add to our todo
        return [...state, action.payload]

        case TOGGLE_COMPLETED:
        // if set is complete vs is not complete
        return state.map((todo, index) => {
            return index !== action.payload ? todo : 
                Object.assign({}, todo, {completed: !todo.completed});
        });

        default:
        return state;
    }
};