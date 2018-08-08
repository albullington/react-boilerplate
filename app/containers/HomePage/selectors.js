/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectString = () =>
  createSelector(selectHome, homeState => homeState.get('searchTerm'));

export { selectHome, makeSelectString };
