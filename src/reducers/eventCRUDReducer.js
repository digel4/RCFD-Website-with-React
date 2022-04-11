import _ from 'lodash';
import {
    CREATE_EVENT,
    EDIT_EVENT,
    DELETE_EVENT
} from '../actions/types';

const eventCRUDReducer = (state = {}, action) => {
    switch (action.type) {
    case CREATE_EVENT:
      return { ...state, [action.payload.id]: action.payload  };
    case EDIT_EVENT:
      return { ...state, [action.payload.id]: action.payload  };
    case DELETE_EVENT:
      // omit doesn't change original state object  so dont need to create new object through spread syntax
      return _.omit(state, action.payload)
    default:
        return state;
    }
  };

export default eventCRUDReducer;