import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

import axios from 'axios';

function* fetchUser() {
  const data = yield axios.get('/api/home.json');
  const result = data.data.data;
  yield put({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  })
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;