/*
 * AppReducer
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

import { LOAD_LIST_SUCCESS, LOAD_LIST, LOAD_LIST_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  searchTerm: false,
  list: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['list'], false);
    case LOAD_LIST_SUCCESS:
      return state
        .setIn(['list'], action.list)
        .set('loading', false)
        .set('searchTerm', action.searchTerm);
    case LOAD_LIST_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
