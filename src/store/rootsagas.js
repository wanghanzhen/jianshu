import { sagas as homeSagas } from '../pages/home/store';
import { sagas as detailSagas } from '../pages/detail/store';
import { sagas as headerSagas } from '../common/header/store';
import { all } from 'redux-saga/effects';

export default function* rootSagas() {
  yield all([
    homeSagas(),
    detailSagas(),
    headerSagas(),
  ])
}