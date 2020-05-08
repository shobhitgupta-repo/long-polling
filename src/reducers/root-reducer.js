import { combineReducers } from "redux";
import data from  './data';
import {reducer as toastr} from 'react-redux-toastr';


export default combineReducers({
    data,
    toastr
});
