import mySaga from '../pages/home/store/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSagas() {
  yield all([mySaga()])
}