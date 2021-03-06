import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LoginSuccessed, LoginFailed } from '../actions/Login.act';
import * as types from '../constants/login.const';

export function* loginSaga(action :any) {
const   getUrl= 'https://5f867e43c8a16a0016e6b588.mockapi.io/user';

    try {
        const data = yield call(axios.request, {
            url : getUrl,
            method :'POST',
            data: {
                username : action.data.username,
                password : action.data.password,
            }
        })
        if (data) {
            localStorage.setItem('token',data.data.token);
            yield put (LoginSuccessed(data.data.token));
        }
        } catch (error) {
        yield put(LoginFailed(error))
    }
}
export default function* signInSaga() {
    yield takeLatest(types.LOGIN_REQUESTED, loginSaga);
}