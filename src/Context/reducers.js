import { JsonInput } from "@mantine/core";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const SET_TRAIN_INFO = "SET_TRAIN_INFO";

const addItemToCart = (menuItem, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item._id === menuItem._id);

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...menuItem, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    localStorage.setItem("currentMenuItem", JSON.stringify(menuItem));
    return { ...state, cart: updatedCart };
};

const removeItemFromCart = (itemId, state) => {
    console.log("Removing cart item with id: " + itemId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item._id === itemId);   
    const updatedItem = {
        ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

const updateItemInCart = (itemId, actionType, state) => {
    console.log("Removing item with id: " + itemId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item._id === itemId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex],
    };
    if (actionType === "REMOVE") updatedItem.quantity--;
    if (actionType === "ADD") updatedItem.quantity++;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

const RemoveCartItemInCart = (itemId, state) => {
    console.log("Removing item with id: " + itemId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item._id === itemId);
    console.log("==updatedItemIndex==",updatedItemIndex);
    const updatedItem = {
        ...updatedCart[updatedItemIndex],
    };
   // if (actionType === "REMOVE") updatedItem.quantity--;
   // if (actionType === "ADD") updatedItem.quantity++;
    //if (updatedItem.quantity <= 0) {
        console.log("updatedCart",updatedCart)
        updatedCart.splice(updatedItemIndex, 1);

        console.log("removed updatedCart",updatedCart)
    //} else {
       // updatedCart[updatedItemIndex] = updatedItem;
    //}
    return { ...state, cart: updatedCart };
};

const setCartEmpty = (actionType, state) => {
    let updatedCart = [...state.cart];
    console.log("---------Emptying cart---------");
    console.log(updatedCart);
    
    if (actionType === "EMPTY_CART") {
        updatedCart = [];
    }
    return { ...state, cart: updatedCart };
};

export const cartItemsReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return addItemToCart(action.menuItem, state);
        case REMOVE_ITEM:
            return removeItemFromCart(action.itemId, state);
        case UPDATE_ITEM:
            return updateItemInCart(action.itemId, action.actionType, state);
        case EMPTY_CART:
            return setCartEmpty(action.actionType, state);
        case REMOVE_CART_ITEM:
            return RemoveCartItemInCart(action.itemId, state);
        case SET_TRAIN_INFO:
            return {
             ...state,
             trainInfo: action.trainInfo,
            };
        default:
            return state;
    }
};
