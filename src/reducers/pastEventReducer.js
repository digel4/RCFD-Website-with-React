import _ from 'lodash';
import {
    FETCH_PASTEVENTS,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
    case FETCH_PASTEVENTS:
    // mpayKeys creates a new object from an array of object using the second param as the new key
        // return { ...state, ..._.mapKeys(action.payload, 'id') };
        return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
        return state;
    }
  };