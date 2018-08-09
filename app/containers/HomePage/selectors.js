/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectString = () =>
  createSelector(selectHome, homeState => homeState.get('searchTerm'));

// const makeSelectList = () =>
//   createSelector(selectHome, homeState => homeState.get('list'));

export { selectHome, makeSelectString };
