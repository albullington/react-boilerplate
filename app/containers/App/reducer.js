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

import { FETCH_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  list: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('list', false);
    case LOAD_LIST_SUCCESS:
      return state.set('list', action.list).set('loading', false);
    case LOAD_LIST_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
