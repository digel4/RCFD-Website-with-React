import _ from 'lodash';
import {
    FETCH_EVENT,
    FETCH_CURREVENTS,
    FETCH_PASTEVENTS,
    CREATE_EVENT,
    EDIT_EVENT,
    DELETE_EVENT
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
    case FETCH_CURREVENTS:
      // mpayKeys creates a new object from an array of object using the second param as the new key
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    // case FETCH_PASTEVENTS:
    // // mpayKeys creates a new object from an array of object using the second param as the new key
    //     return { ...state, ..._.mapKeys(action.payload, 'id') };
    // case FETCH_EVENT
    //   return { ...state, [action.payload.id]: action.payload  };
    //   case CREATE_EVENT:
    //     return { ...state, [action.payload.id]: action.payload  };
    //   case EDIT_EVENT:
    //     return { ...state, [action.payload.id]: action.payload  };
    //   case DELETE_EVENT:
    //     // omit doesn't change original state object  so dont need to create new object through spread syntax
    //     return _.omit(state, action.payload)
    default:
        return state;
    }
  };