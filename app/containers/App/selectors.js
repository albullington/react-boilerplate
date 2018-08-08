/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectSearchTerm = () =>
  createSelector(selectGlobal, globalState => globalState.get('searchTerm'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectList = () =>
  createSelector(selectGlobal, globalState => globalState.getIn(['list']));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectSearchTerm,
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
  makeSelectLocation,
};
