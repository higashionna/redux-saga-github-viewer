import { combineReducers } from 'redux'

import issue from './issue'
import modal from './ui/modal'
import user from './user'

const rootReducer = combineReducers({
    issue,
    user,
    ui: combineReducers({ modal })
})

export default rootReducer