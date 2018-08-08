/*
 * ListConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_CALL_REQUEST = 'boilerplate/List/API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'boilerplate/List/API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'boilerplate/List/API_CALL_FAILURE';
