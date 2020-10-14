import { all } from 'redux-saga/effects';
import signInSaga from '../containers/Login.saga'

export default function* rootSaga() {
    yield all([
        signInSaga()

    ]);
}