import { products } from '../utils/products';

import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    SET_PRODUCTS,
    GET_SINGLE_PRODUCT
} from '../actions'

const products_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, openSidebar: true }
    }

    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, openSidebar: false }
    }

    if (action.type === SET_PRODUCTS) {
        console.log("Setting Products");
        console.log(products);
        return { ...state, products: products }
    }

    if (action.type === GET_SINGLE_PRODUCT) {
        const productsFiltered = state.products.filter((product) => {
            return product.id === action.payload;
        });

        let singleProduct = !productsFiltered || productsFiltered[0]
        return { ...state, singleProduct }
    }
    return state
}


export default products_reducer