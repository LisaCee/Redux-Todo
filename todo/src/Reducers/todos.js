import {ADD_TODO, TOGGLE_TODO} from '../Actions';

export default (todo = [], action) => {
    switch (action.type) {
      case ADD_TODO:
      return action.payload

      case TOGGLE_TODO:
      return action.payload

      default:
        return todo;
    }
  };