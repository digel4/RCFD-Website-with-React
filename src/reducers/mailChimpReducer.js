import {
    MAILCHIMP_EMAIL,
    MAILCHIMP_FIRST_NAME,
    MAILCHIMP_SECOND_NAME,
    SEND_DETAILS_TO_MAILCHIMP_API
} from '../actions/types';

const mailChimpReducer = (state = {}, action) => {
    switch (action.type) {
    case MAILCHIMP_EMAIL:
      return { ...state, emailAddress: action.payload };
    case MAILCHIMP_FIRST_NAME:
        return { ...state, firstName: action.payload };
    case MAILCHIMP_SECOND_NAME:
      return { ...state, secondName: action.payload  };
    case SEND_DETAILS_TO_MAILCHIMP_API:
        return {...state,secondName: action.payload };
    default:
        return state;
    }
  };

export default mailChimpReducer;