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

  export const signIn = (userName, password) => async dispatch => {
    console.log("signIn triggered")
    console.log(password)
    console.log(userName)
    // events.post('/login', { userName: "userName", password: "password" })
    // axios.post('http://localhost:3001/login', { userName: "hello"})
    // axios.post('/http://localhost:3001/login', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    const response = await events.post('/login', { userName, password })

    dispatch ({ type: ADMIN_LOGIN, payload: response.data })
    
  };

  // export const signIn = (userName, password) => {
  //   console.log("hit sign in")
  //   console.log(`username is ${userName}`)
  //   console.log(`password is ${password}`)
  //   axios.post('/http://localhost:3001/login', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };

  
  export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };

  // export const adminName = () => async dispatch => {
  //   const response = await events.get('/events');
    
  //   dispatch({ type: ADMIN_NAME, payload: response.data });
  // };

  export const setAdminName = (admin) => async dispatch => {
    
    dispatch({ type: "SET_ADMIN_NAME", payload: {adminName: admin}   });
  };

  export const setPassword = (password) => async dispatch => {
    
    dispatch({ type: "SET_ADMIN_PASSWORD", payload: {adminPassword: password} });
  };

  export const error = () => async dispatch => {
    const response = await events.get('/events');
    
    dispatch({ type: FETCH_CURREVENTS, payload: response.data });
  };

  export const submitting = () => async dispatch => {
    const response = await events.get('/events');
    
    dispatch({ type: FETCH_CURREVENTS, payload: response.data });
  };

  export const setSubmitting = () => async dispatch => {
    const response = await events.get('/events');
    
    dispatch({ type: FETCH_CURREVENTS, payload: response.data });
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
