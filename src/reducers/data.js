import {
    LOAD_DATA_SUCCESS,
} from "../actions/types";

import _ from 'lodash';


const initialState = {
    prices: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS: {
        return {
            ...state,
            prices: action.data
        }
    }

    default:
      return state;
  }
};
