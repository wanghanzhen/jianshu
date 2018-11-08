import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';

import axios from 'axios';

function* getHomeInfo() {
  const data = yield axios.get('/api/home.json');
  const result = data.data.data;
  yield put(actionCreators.changHomeData(result));
}

function* getMoreList(page) {
  const data = yield axios.get('/api/homeList.json?page=' + page);
  const result = data.data.data;
  yield put(actionCreators.addHomeList(result, page + 1));

}

function* mySaga() {
  yield takeEvery(actionTypes.HOME_DATA_REQUEST, getHomeInfo);
  yield takeEvery(actionTypes.MORE_LIST_REQUEST, getMoreList);
}

export default mySaga;