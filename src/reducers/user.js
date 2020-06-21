import { USER_FETCH_SUCCEEDED } from '../actions'

const initialState = {
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_SUCCEEDED:
            return { ...state, data: action.payload.user }
        default:
            return state
    }
}

export default reducer