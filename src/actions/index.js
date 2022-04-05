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

  export const signIn = (username, password) => async dispatch => {
    console.log("signIn triggered")
    console.log(password)
    console.log(username)
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
    const response = await events.post('/login', { username, password }, { withCredentials: true })

    dispatch ({ type: ADMIN_LOGIN, payload: response.data })
    
  };

  export const verifyUser = () => async dispatch => {
    console.log("verifyUser triggered")
      const response = await events.post("/refreshToken", {}, { withCredentials: true })
      console.log(response.data)
      if (response.statusText === "OK") {
        const data =  response.data
        console.log("data is:")
        console.log(response.data)
        dispatch ({ type: "VERIFY_USER", payload: data })
      } else {
          console.log("something went wrong!")
          dispatch ({ type: "VERIFY_USER", payload: { token: null } })
        }
        // call refreshToken every 5 minutes to renew the authentication token.
        setTimeout(verifyUser, 5 * 60 * 1000)
      };

  // const logoutHandler = () => {
  //   fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${userContext.token}`,
  //     },
  //   }).then(async response => {
  //     setUserContext(oldValues => {
  //       return { ...oldValues, details: undefined, token: null }
  //     })
  //     window.localStorage.setItem("logout", Date.now())
  //   })
  // }

  
  export const signOut = (token) => async dispatch => {
    console.log("hit Logout")
    console.log("token is:")
    console.log(token)
    await events.get('/logout', { withCredentials: true, headers: {Authorization: `Bearer ${token}`} })

    dispatch ({ type: ADMIN_LOGOUT, payload: {
      token: null,
      adminName: null,
      passowrd: null
    } })
    
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

  export const fetchCurrEvents = () => async (dispatch, getState) => {
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

  export const deleteEvent = (id) => async dispatch => {
    const response = await events.delete(`/events/${id}`);

    dispatch({ type: DELETE_EVENT, payload: response.data })
  }

  export const editEvent = (id, formValues) => async dispatch => {
    const response = await events.patch(`/events/${id}`, {...formValues});

    dispatch({ type: EDIT_EVENT, payload: response.data })
  }

  export const createEvent = (formValues) => async dispatch => {
    console.log("triggered createEvent")
    console.log(formValues)

    const response = await events.post('/events', {...formValues});

    dispatch({ type: CREATE_EVENT, payload: response.data })
  }







  export const setDescription = (desc) => async dispatch => {

    dispatch({ type: "SET_DESCRIPTION",  payload: {desc} } )
  }


  export const setExcerpt = (exercpt) => async dispatch => {

    dispatch({ type: "SET_EXCERPT" ,  payload: {exercpt} } )
  }


  export const setPostcode = (postcode) => async dispatch => {

    dispatch({ type: "SET_POSTCODE" ,  payload: {postcode} } )
  }


  export const setCity = (city) => async dispatch => {

    dispatch({ type: "SET_CITY",  payload: {city} } )
  }


  export const setStreetNumber = (streetNumber) => async dispatch => {

    dispatch({ type: "SET_STREET_NUMBER",  payload: {streetNumber} } )
  }


  export const setStreetName = (streetName) => async dispatch => {

    dispatch({ type: "SET_STREET_NAME",  payload: {streetName}} )


  }


  export const setBusinessName = (businessName) => async dispatch => {

    dispatch({ type: "SET_BUSINESS_NAME" ,  payload: {businessName} } )
  }




  export const setImage = (image) => async dispatch => {

    dispatch({ type: "SET_IMAGE" ,  payload: {image} } )
  }


  export const setEventURL = (eventURL) => async dispatch => {

    dispatch({ type: "SET_EVENT_URL",  payload: {eventURL} } )
  }


  export const setEndTime = (endTime) => async dispatch => {

    dispatch({ type: "SET_END_TIME",  payload: {endTime} } )
  }


  export const setStartTime = (startTime) => async dispatch => {

    dispatch({ type: "SET_START_TIME" ,  payload: {startTime} } )
  }


  export const setDate = (date) => async dispatch => {

    dispatch({ type: "SET_DATE" ,  payload: {date} } )
  }


  export const setName = (name) => async dispatch => {

    dispatch({ type: "SET_NAME",  payload: {name} } )
  }