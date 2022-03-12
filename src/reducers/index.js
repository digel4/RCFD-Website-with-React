import { combineReducers } from "redux";

import currEventReducer from './currEventReducer'
import pastEventReducer from './pastEventReducer'
 
export default combineReducers({
    currEvents: currEventReducer,
    pastEvents: pastEventReducer
});