import events from '../APIS/events';
import { 
    CREATE_EVENT,
    FETCH_EVENT,
    CLEAR_SELECTED_EVENT,
    FETCH_CURREVENTS,
    FETCH_PASTEVENTS,
    EDIT_EVENT,
    DELETE_EVENT,
    ADMIN_LOGOUT,
    ADMIN_LOGIN,
    MAILCHIMP_EMAIL,
    MAILCHIMP_FIRST_NAME,
    MAILCHIMP_SECOND_NAME,
    SEND_DETAILS_TO_MAILCHIMP_API
  } from './types';

  // ADMIN AUTH ACTIONS

  export const adminLogin = (username, password) => async dispatch => {
    const response = await events.post('/login', { username, password }, { withCredentials: true })
    dispatch ({ type: ADMIN_LOGIN, payload: response.data })
  };

  export const adminLogout = (token) => async dispatch => {
    console.log("hit logout")
    await events.get('/logout', { withCredentials: true, headers: {Authorization: `Bearer ${token}`} })

    dispatch ({ type: ADMIN_LOGOUT, payload: {
      token: null,
      adminName: null,
      passowrd: null
    } })
    
  };

  export const verifyUser = () => async dispatch => {
    const response = await events.post("/refreshToken", {}, { withCredentials: true })
    if (response.statusText === "OK") {
      const data =  response.data
      dispatch ({ type: "VERIFY_USER", payload: data })
    } else {
      console.log("something went wrong!")
      dispatch ({ type: "VERIFY_USER", payload: { token: null } })
    }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000)
  };

  // ADMIN LOGIN SET STATE ACTIONS


  export const setAdminName = (admin) => async dispatch => {
    dispatch({ type: "SET_ADMIN_NAME", payload: {adminName: admin}   });
  };

  export const setPassword = (password) => async dispatch => {
    dispatch({ type: "SET_ADMIN_PASSWORD", payload: {adminPassword: password} });
  };

  // export const error = () => async dispatch => {
  //   const response = await events.get('/events');
  //   dispatch({ type: FETCH_CURREVENTS, payload: response.data });
  // };

  // export const submitting = () => async dispatch => {
  //   const response = await events.get('/events');
  //   dispatch({ type: FETCH_CURREVENTS, payload: response.data });
  // };

  // export const setSubmitting = () => async dispatch => {
  //   const response = await events.get('/events');
  //   dispatch({ type: FETCH_CURREVENTS, payload: response.data });
  // };

  // FETCH EVENT ACTIONS

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
    response.data.longDateAsString = new Date(response.data.longDate).toLocaleString('en-GB', {weekday: "long", day: '2-digit', month: 'long', year: "numeric"});
    dispatch({ type: FETCH_EVENT, payload: response.data });
  };

  export const clearSelectedEvent = () => async dispatch => {

    console.log("triggered clear selected event")
    // const payload = null;

    dispatch({ type: CLEAR_SELECTED_EVENT, payload: null });
  };

// EVENT CRUD ACTIONS
export const deleteEvent = (id) => async dispatch => {
  const response = await events.delete(`/events/${id}`);
  dispatch({ type: DELETE_EVENT, payload: response.data })
}

export const editEvent = (id, formValues) => async dispatch => {
  const response = await events.put(`/admin/${id}`, {...formValues});
  dispatch({ type: EDIT_EVENT, payload: response.data })
}

export const createEvent = (formValues) => async dispatch => {
  //console.log(formValues)
  const response = await events.post('/admin/createEvent', {...formValues});
  dispatch({ type: CREATE_EVENT, payload: response.data })
}

// SET STATE FOR EVENT EDIT AND CREATE ACTIONS

  export const setDescription = (description) => async dispatch => {
    dispatch({ type: "SET_DESCRIPTION",  payload: {description} } )
  }

  export const setExcerpt = (excerpt) => async dispatch => {
    dispatch({ type: "SET_EXCERPT" ,  payload: {excerpt} } )
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


  export const setDate = (rawDate) => async dispatch => {
    const date = rawDate.slice(0, 10)
    dispatch({ type: "SET_DATE" ,  payload: {date} } )
  }

  export const setName = (name) => async dispatch => {
    dispatch({ type: "SET_NAME",  payload: {name} } )
  }


  // EMAIL SUBSCRIBE ACTIONS

  export const setMailChimpfirstName = (firstName) => async dispatch => {
    console.log(firstName)
    dispatch({ type: MAILCHIMP_FIRST_NAME,  payload: firstName } )
  }

  export const setMailChimpSecondName = (secondName) => async dispatch => {
    console.log(secondName)

    dispatch({ type: MAILCHIMP_SECOND_NAME,  payload: secondName } )
  }

  export const setMailChimpEmail = (email) => async dispatch => {

    dispatch({ type: MAILCHIMP_EMAIL,  payload: email } )
  }

  export const sendDetailsToMailChimpAPI = (formValues) => async dispatch => {
    console.log(formValues)
    const response = await events.post('/subscribe', {...formValues});

    dispatch({ type: SEND_DETAILS_TO_MAILCHIMP_API, payload: response.data })
  }