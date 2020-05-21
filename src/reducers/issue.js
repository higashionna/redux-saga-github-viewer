import { ISSUE_ADD, ISSUE_REMOVE, ISSUE_UPDATE } from '../actions'

const initialData = {
    1: {
        id: 1,
        title: 'A bug in Top Page',
        status: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createBy: ''
    },
    2: {
        id: 2,
        title: 'A problem of performance in Top Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 0,
        createBy: ''
    },
    3: {
        id: 3,
        title: 'fix layout',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 1,
        createBy: ''
    }
}

const initialState = {
    index: Object.keys(initialData).length,
    data: initialData
}

const reducer = (state = initialState, action) => {
    const { index, data } = state
    const { issue } = action.payload || {}
    const newData = { ...state.data }
    const id = index + 1
    switch (action.type) {
        case ISSUE_ADD:
            newData[id] = { ...issue, id }
            return { ...state, index: id, data: newData }
        case ISSUE_UPDATE:
            return {
                ...state,
                data: { ...data, [issue.id]: issue }
            }
        case ISSUE_REMOVE:
            delete newData[issue.id]
            return {
                ...state,
                data: newData
            }
        default:
            return state
    }
}

export default reducer