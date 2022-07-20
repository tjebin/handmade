import React, { useContext, useEffect, useReducer } from 'react';
import products_reducer from '../reducers/products_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

const initialState = {
    openSidebar: false
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

    useEffect(() => {
        setOpenSidebar();
    }, [])
    return (
        <ProductsContext.Provider value={{ ...state, setOpenSidebar, setCloseSidebar }}>
            {children}
        </ProductsContext.Provider>
    )
}
export const useProductsContext = () => {
    return useContext(ProductsContext);
}

