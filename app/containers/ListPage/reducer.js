/*
 * ListReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  fetching: false,
  list: [],
  error: null,
});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      // Returns whether API call is loading, success, or error
      return state.set('fetching', true);
    case API_CALL_SUCCESS:
      return state.set('list', action.list);
    case API_CALL_FAILURE:
      return state.set('error', 'Cannot find your list');
    default:
      return state;
  }
}

export default listReducer;
