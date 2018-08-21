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
export function* saveString() {
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

  try {
    yield call(request, requestURL, requestHeader);
    yield put({ type: UPDATE_STRING, searchTerm: '' });
  } catch (err) {
    if (err) throw err;
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* saveStrings() {
  yield takeEvery(INSERT_STRING, saveString);
}
