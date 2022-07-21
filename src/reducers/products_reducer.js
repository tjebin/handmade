import { products } from '../utils/products';

import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    SET_PRODUCTS
} from '../actions'

const products_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, openSidebar: true }
    }

    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, openSidebar: false }
    }

    if (action.type === SET_PRODUCTS) {
        return { ...state, products: products }
    }
    return state
}


export default products_reducer