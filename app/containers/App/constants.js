/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_LIST = 'boilerplate/App/FETCH_LIST';
export const LOAD_LIST_SUCCESS = 'boilerplate/App/LOAD_LIST_SUCCESS';
export const LOAD_LIST_ERROR = 'boilerplate/App/LOAD_LIST_ERROR';
