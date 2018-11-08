import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as actionCreators  from './actionCreators';
import * as actionTypes from './actionTypes';

function* getDetail(id) {
  const data = yield axios('/api/detail.json?id=' + id);
  const { content, title } = data.data.data;
  yield put(actionCreators.changeDetail(title, content));
}

export default function* () {
  yield takeEvery(actionTypes.DETAIL_REQUEST, getDetail);
}