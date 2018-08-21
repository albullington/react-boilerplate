/**
 * Submits a new string to the database
 */

import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectString } from 'containers/HomePage/selectors';
import { UPDATE_STRING, INSERT_STRING } from 'containers/HomePage/constants';

import request from 'utils/request';

/**
 * Post string request/response handler
 */
export function* addString() {
  const searchTerm = yield select(makeSelectString());
  const requestURL = 'http://localhost:3000/list';
  const requestHeader = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      searchTerm,
    }),
  };

  yield call(request, requestURL, requestHeader);
  yield put({ type: UPDATE_STRING, searchTerm: '' });
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addStrings() {
  yield takeEvery(INSERT_STRING, addString);
}
