import {
    ADMIN_LOGIN,
    ADMIN_LOGOUT
} from '../actions/types';

const adminReducer = (state = {}, action) => {
    switch (action.type) {
    case ADMIN_LOGIN:
      // mpayKeys creates a new object from an array of object using the second param as the new key
      return { ...state, adminLoginStatus: action.payload };
    // case FETCH_PASTEVENTS:
    // // mpayKeys creates a new object from an array of object using the second param as the new key
    //   return { ...state, ..._.mapKeys(action.payload, '_id') };
    case ADMIN_LOGOUT:
      // mpayKeys creates a new object from an array of object using the second param as the new key
        return { ...state, adminLoginStatus: action.payload };
    default:
        return state;
    }
  };

export default adminReducer;