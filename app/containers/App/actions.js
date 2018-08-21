/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { FETCH_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR } from './constants';

/**
 * Load the lists, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_LIST
 */
export function fetchList() {
  return {
    type: FETCH_LIST,
  };
}

/**
 * Dispatched when the lists are loaded by the request/fetch saga
 *
 * @param  {array} data The list data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function listLoaded(list) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
  };
}

/**
 * Dispatched when loading the lists fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_LIST_ERROR passing the error
 */
export function listLoadingError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}
