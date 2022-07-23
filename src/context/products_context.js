import React, { useContext, useEffect, useReducer } from 'react';
import products_reducer from '../reducers/products_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_PRODUCTS, GET_SINGLE_PRODUCT } from '../actions';

const initialState = {
    openSidebar: false,
    products_loading: false,
    products_error: false,
    products: [],
    singleProduct: {}
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)

    const setOpenSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }

    const setCloseSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }

    const setProducts = () => {
        dispatch({ type: SET_PRODUCTS })
    }
    const getSingleProduct = (id) => {
        dispatch({ type: SET_PRODUCTS })
        dispatch({ type: GET_SINGLE_PRODUCT, payload: id })
    }

    useEffect(() => {
        setOpenSidebar();
        setProducts();
    }, [])
    return (
        <ProductsContext.Provider value={{ ...state, setOpenSidebar, setCloseSidebar, getSingleProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}
export const useProductsContext = () => {
    return useContext(ProductsContext);
}

