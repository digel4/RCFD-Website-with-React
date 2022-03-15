import events from '../APIS/events';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_EVENT,
    FETCH_EVENT,
    FETCH_CURREVENTS,
    FETCH_PASTEVENTS,
    EDIT_EVENT,
    DELETE_EVENT,
  } from './types';

//   export const signIn = (userId) => {
//     return {
//       type: SIGN_IN,
//       payload: userId
//     };
//   };
  
//   export const signOut = () => {
//     return {
//       type: SIGN_OUT
//     };
//   };

  export const fetchCurrEvents = () => async dispatch => {
    const response = await events.get('/events');
    
    dispatch({ type: FETCH_CURREVENTS, payload: response.data });
  };

  export const fetchPastEvents = () => async dispatch => {
    const response = await events.get('/pastevents');

    dispatch({ type: FETCH_PASTEVENTS, payload: response.data });
  };

  export const fetchEvent = (id) => async dispatch => {
    const response = await events.get(`/events/${id}`);
    console.log(response.data)
    dispatch({ type: FETCH_EVENT, payload: response.data });
  };
