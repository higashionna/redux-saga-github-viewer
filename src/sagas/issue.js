import { call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import camelcaseKeys from 'camelcase-keys';
import * as api from '../services'
import * as ActionType from '../actions'

const success = (message) => toast(message, {
    position: toast.POSITION.TOP_CENTER,
    className: 'toast-success',
    autoClose: false,
    hideProgressBar: true
});
const error = (message) => toast(message, {
    position: toast.POSITION.TOP_CENTER,
    className: 'toast-error',
    autoClose: false,
    hideProgressBar: true
});

function* fetchIssueList() {
    try {
        const data = yield call(api.fetchIssueList, { owner: "higashionna" })
        const issues = data.reduce((acc, item) => {
            return { ...acc, [item.id]: camelcaseKeys(item, { deep: true }) }
        }, {})
        yield put({ type: ActionType.ISSUE_FETCH_SUCCEEDED, payload: { issues } })
    } catch (e) {
        yield put({ type: ActionType.ISSUE_FETCH_FAILED })
        console.error(e)
    }
}


function* createIssue(action) {
    try {
        yield call(api.createIssue, { data: action.payload, owner: "higashionna" });
        yield put({ type: ActionType.ISSUE_CREATE_SUCCEEDED });
        yield put({ type: ActionType.ISSUE_FETCH_REQUESTED });
        success("issueを作成しました")
    } catch (e) {
        console.error(e)
        error("作成に失敗しました")
        yield put({
            type: ActionType.ISSUE_CREATE_FAILED,
            payload: { message: 'issueの作成に失敗しました' },
        });
    }
}

function* issueSaga() {
    yield takeLatest(ActionType.ISSUE_FETCH_REQUESTED, fetchIssueList)
    yield takeLatest(ActionType.ISSUE_CREATE_REQUESTED, createIssue)
}

export default issueSaga
