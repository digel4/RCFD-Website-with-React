import { combineReducers } from "redux";

import eventReducer from './eventReducer';
import adminReducer from './adminReducer';
import eventCRUDReducer from './eventCRUDReducer';

 
export default combineReducers({
    events: eventReducer,
    admin: adminReducer,
    CRUD: eventCRUDReducer
});