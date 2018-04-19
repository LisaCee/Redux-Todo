import {/*something here*/} from '../Action';

export default (count = 0, action) => {
    switch (action.type) {
      case ADD_TODO:
      // Fill in the body of this case
      return count + action.payload
      case TOGGLE_TODO:
      // Fill in the body of this case
      return count - action.payload
      default:
        return count;
    }
  };