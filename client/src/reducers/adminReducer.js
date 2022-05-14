import {
    ADMIN_LOGIN,
    ADMIN_LOGOUT
} from '../actions/types';

const adminReducer = (state = {}, action) => {
    switch (action.type) {
    case ADMIN_LOGIN:
      // mpayKeys creates a new object from an array of object using the second param as the new key
      console.log("admin login response is:")
      console.log(action.payload)
      // return { ...state, adminLoginStatus: action.payload };
      return { ...state, ...action.payload};
    // case FETCH_PASTEVENTS:
    // // mpayKeys creates a new object from an array of object using the second param as the new key
    //   return { ...state, ..._.mapKeys(action.payload, '_id') };
    case ADMIN_LOGOUT:
      // mpayKeys creates a new object from an array of object using the second param as the new key
        return { ...state,  ...action.payload };
    case "SET_ADMIN_NAME":
      // console.log("hit admin name reducer")
      return { ...state, ...action.payload};
    case "SET_ADMIN_PASSWORD":
      return { ...state, ...action.payload};
    case "VERIFY_USER":
      // console.log("verifyUser Reducer Payload is:")
      // console.log(action.payload)
      return {...state, ...action.payload}


    case "SET_BUSINESS_NAME":
      return {...state, ...action.payload}


    case "SET_CITY":
      return {...state, ...action.payload}
    case "SET_DATE":
      return {...state, ...action.payload}
    case "SET_DESCRIPTION":
      return {...state, ...action.payload}
    case "SET_END_TIME":
      return {...state, ...action.payload}
    case "SET_START_TIME":
      return {...state, ...action.payload}
    case "SET_EVENT_URL":
      return {...state, ...action.payload}
    case "SET_EXCERPT":
      return {...state, ...action.payload}
    case "SET_IMAGE":
      return {...state, ...action.payload}
    case "SET_NAME":
      return {...state, ...action.payload}
    case "SET_PASSWORD":
      return {...state, ...action.payload}
    case "SET_POSTCODE":
      return {...state, ...action.payload}
    case "SET_STREET_NUMBER":
      return {...state, ...action.payload}
    case "SET_STREET_NAME":
      return {...state, ...action.payload}


    default:
        return state;
    }
  };


  // setBusinessName, setCity, setDate, setDescription, setEndTime, setEventURL, setExcerpt, setImage, setName, setPassword, setPostcode, setStartTime, setStreetNumber, setStreetName

export default adminReducer;