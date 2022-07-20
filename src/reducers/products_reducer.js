import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions'

const products_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, openSidebar: true }
    }

    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, openSidebar: false }
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`);
}


export default products_reducer