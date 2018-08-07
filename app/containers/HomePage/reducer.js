/*
 * HomeReducer
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

import { ADD_STRING } from './constants';

// The initial state of the App
export const initialState = fromJS({
  searchTerm: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STRING:
      // Return confirmation that string has been added to list
      return state.set('searchTerm', action.searchTerm);
    default:
      return state;
  }
}

export default homeReducer;
