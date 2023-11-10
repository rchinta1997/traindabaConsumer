import React, { useState, useReducer, useEffect } from "react";
import CartContext from "./cart-context";
import { cartItemsReducer, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, EMPTY_CART, REMOVE_CART_ITEM } from "./reducers";

const GlobalState = (props) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || { cart: [] };

    const [cartState, dispatch] = useReducer(cartItemsReducer, storedCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartState));
    }, [cartState]);



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

    const removeCartItemInCart = (itemId) => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: REMOVE_CART_ITEM, itemId: itemId });
        }, 700);
    };

    

    const updateItemInCart = (itemId,actionType) => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: UPDATE_ITEM, itemId: itemId,actionType:actionType });
        }, 700);
    };
    const setEmptyCart = (actionType) => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: EMPTY_CART, actionType:actionType });
        }, 700);
    };
    return (
        <CartContext.Provider
            value={{
                cart: cartState.cart,
                addItemToCart: addItemToCart,
                removeItemFromCart: removeItemFromCart,
                removeCartItemInCart: removeCartItemInCart,
                updateItemInCart: updateItemInCart,
                setEmptyCart: setEmptyCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default GlobalState;
