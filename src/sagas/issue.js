import { call, put, takeLatest } from 'redux-saga/effects'
import camelcaseKeys from 'camelcase-keys';
import * as api from '../services'
import * as ActionType from '../actions'

function* fetchIssueList() {
    try {
        const data = yield call(api.fetchIssueList, { owner: "higashionna" })
        const issues = data.reduce((acc, item) => {
            return { ...acc, [item.id]: camelcaseKeys(item, { deep: true }) }
        }, {})
        yield put({ type: ActionType.ISSUE_FETCH_SUCCEEDED, payload: { issues } })
    } catch (e) {
        console.error(e)
    }
}

function* issueSaga() {
    yield takeLatest(ActionType.ISSUE_FETCH_REQUESTED, fetchIssueList)
}

export default issueSaga
