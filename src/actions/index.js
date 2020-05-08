import {toastr} from "react-redux-toastr";
import {
  LOAD_DATA_SUCCESS,
 } from './types';


 export const loadPrices = () => dispatch => {
     return fetch(
         'https://jsonplaceholder.typicode.com/posts')
         .then(response => {
             if (response.ok) {
                 return response.json();
             }
             throw new Error(response.statusText);
         })
         .then(
             data => {
                 toastr.removeByType('error');
                 toastr.success('Refreshed');
                 dispatch({type: LOAD_DATA_SUCCESS, data});
             },
             error => {
                 toastr.error(`Error loading data: ${error.message}`);
             })
 };
