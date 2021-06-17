import { call, put, takeLatest } from 'redux-saga/effects';
import { logIn } from '../services/authService';

// Worker saga will be fired on LOG_IN actions
function* logInSaga({ payload }) {
  try {
    const { username, password } = payload;
    yield call(logIn, username, password);
    yield put({ type: 'AUTHORIZATION_SUCCESS', payload: username });
  } catch (error) {
    yield put({ type: 'AUTHORIZATION_FAIL', payload: error.message, error: true });
  }
}

// Starts logInSaga on each dispatched LOG_IN action
export default function* () {
  yield takeLatest('LOG_IN', logInSaga);
}
