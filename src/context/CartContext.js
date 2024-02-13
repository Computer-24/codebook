import {createContext, useContext, useReducer} from "react";
import {cartReducer} from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0,
    addToCart: (product) => {},
    removeFromCart: (product) => {},
    clearCart: () => {},
}

const CartContext = createContext(cartInitialState)

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(product) {
        const updatedList = state.cartList.concat(product)
        const updatedTotal = state.total + product.price
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter(productItem => productItem.id !== product.id)
        const updatedTotal = state.total - product.price

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0,
            }
        })
    }


    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext)
}

