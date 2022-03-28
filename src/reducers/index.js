import { combineReducers } from "redux";

import eventReducer from './eventReducer'
import pastEventReducer from './pastEventReducer'

import adminReducer from './adminReducer';
 
export default combineReducers({
    events: eventReducer,
    admin: adminReducer
});