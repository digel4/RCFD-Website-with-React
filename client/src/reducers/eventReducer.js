import {
    FETCH_EVENT,
    CLEAR_SELECTED_EVENT,
    FETCH_CURREVENTS,
    FETCH_PASTEVENTS,
} from '../actions/types';

const eventReducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_CURREVENTS:
      return { ...state, currEvents: action.payload };
    case FETCH_PASTEVENTS:
        return { ...state, pastEvents: action.payload };
    case FETCH_EVENT:
      return { ...state, selectedEvent: action.payload  };
    case CLEAR_SELECTED_EVENT:
      return { ...state, selectedEvent: action.payload };
    default:
        return state;
    }
  };

export default eventReducer;