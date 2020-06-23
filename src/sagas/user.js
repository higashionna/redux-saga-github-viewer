import { call, put, takeLatest } from 'redux-saga/effects'
import camelcaseKeys from 'camelcase-keys'
import * as api from '../services'
import * as ActionType from '../actions'

function* fetchUser() {
    try {
        const data = yield call(api.fetchUser)
        const user = camelcaseKeys(data, { deep: true })
        yield put({ type: ActionType.USER_FETCH_SUCCEEDED, payload: { user } })
    } catch (e) {
        yield put({
            type: ActionType.USER_FETCH_FAILED,
            payload: { message: 'ユーザの取得に失敗しました' },
        })
    }
}

function* userSaga() {
    yield takeLatest(ActionType.USER_FETCH_REQUESTED, fetchUser)
}

export default userSaga