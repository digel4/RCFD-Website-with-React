import { combineReducers } from "redux";

import eventReducer from './eventReducer'
import pastEventReducer from './pastEventReducer'
 
export default combineReducers({
    events: eventReducer
});