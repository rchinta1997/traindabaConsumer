import React, { useState, useReducer } from "react";
import CartContext from "./cart-context";
import { cartItemsReducer, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "./reducers";

const GlobalState = (props) => {
    const [cartState, dispatch] = useReducer(cartItemsReducer, { cart: [] });

    const addItemToCart = (menuItem) => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: ADD_ITEM, menuItem: menuItem });
        }, 700);
    };

    const removeItemFromCart = (itemId) => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: REMOVE_ITEM, itemId: itemId });
        }, 700);
    };

    const updateItemInCart = (itemId,actionType) => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: UPDATE_ITEM, itemId: itemId,actionType:actionType });
        }, 700);
    };
    return (
        <CartContext.Provider
            value={{
                cart: cartState.cart,
                addItemToCart: addItemToCart,
                removeItemFromCart: removeItemFromCart,
                updateItemInCart: updateItemInCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default GlobalState;
