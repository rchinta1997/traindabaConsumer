import React from "react";

export default React.createContext({ 
  cart: [],
  addItemToCart: cartItem => {},
  removeItemFromCart: itemId => {},
  updateItemInCart: (itemId,action) => {},
  setEmptyCart: (itemId,action) => {},
  trainInfo:{},
  passengerInfo:{},
});



