/**
 * Gets a list of strings from the database
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST } from 'containers/App/constants';
import { listLoaded, listLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectString } from 'containers/HomePage/selectors';

/**
 * List of strings request/response handler
 */
export function* getList() {
  // Select searchTerm from store
  const searchTerm = yield select(makeSelectString());
  const requestURL = `https://localhost:3000/api/${searchTerm}`;

  try {
    // Call our request helper (see 'request')
    const list = yield call(request, requestURL);
    yield put(listLoaded(list));
  } catch (err) {
    yield put(listLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* listData() {
  // Watches for LOAD_LIST actions and calls getList when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_LIST, getList);
}
