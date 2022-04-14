import { combineReducers } from "redux";

import eventReducer from './eventReducer';
import adminReducer from './adminReducer';
import eventCRUDReducer from './eventCRUDReducer';
import mailChimpReducer from "./mailChimpReducer";

 
export default combineReducers({
    events: eventReducer,
    admin: adminReducer,
    CRUD: eventCRUDReducer,
    mailChimpSubscriptionDetails: mailChimpReducer
});