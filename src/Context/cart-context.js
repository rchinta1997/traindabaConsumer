import React from "react";

export default React.createContext({ 
  cart: [],
  addItemToCart: cartItem => {},
  removeItemFromCart: itemId => {},
  removeCartItemInCart: itemId => {},
  updateItemInCart: (itemId,action) => {},
  setEmptyCart: (action) => {},
  trainInfo:{},
  passengerInfo:{},
});



