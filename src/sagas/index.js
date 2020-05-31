import issueSaga from './issue'

function* rootSaga() {
    yield issueSaga()
}

export default rootSaga
