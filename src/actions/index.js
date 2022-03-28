import events from '../APIS/events';
import axios from 'axios';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_EVENT,
    FETCH_EVENT,
    FETCH_CURREVENTS,
    FETCH_PASTEVENTS,
    EDIT_EVENT,
    DELETE_EVENT,
    ADMIN_LOGOUT,
    ADMIN_LOGIN
  } from './types';

  // export const signIn = (userId) => {
  //   return {
  //     type: SIGN_IN,
  //     payload: userId
  //   };
  // };

  // export const signIn = (userName, password) => async dispatch => {
  //   console.log("signIn triggered")
  //   console.log(password)
  //   // events.post('/login', { userName: "userName", password: "password" })
  //   axios.post('http://localhost:3000/login', { userName: "hello"})
  //   // const response = await events.post('/login', { userName: "userName", password: "password" })

  //   // dispatch ({ type: ADMIN_LOGIN, payload: response.data })
    
  // };

  export const signIn = (userName, password) => {
    axios.post('http://localhost:3000/login', { userName: "hello"})
  };

  
  export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };

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

    dispatch({ type: FETCH_EVENT, payload: response.data });
  };
