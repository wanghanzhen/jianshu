import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';

function* getList() {
  const data = yield axios.get('/api/headerList.json');
  const result = data.data.data;
  yield put(actionCreators.changeList(result));
}

export default function* () {
  yield takeEvery(actionTypes.LIST_REQUEST, getList);
}