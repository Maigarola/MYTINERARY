import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import activitiesReducer from "./activityReducer";
import usersReducer from "./userReducer";
import authReducer from './authReducer';
import errorReducer from './errorReducer';


const rootReducer = combineReducers({
    cities: citiesReducer , 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer, 
    users: usersReducer,
    auth: authReducer,
    error: errorReducer
});
    
export default rootReducer;/*  */