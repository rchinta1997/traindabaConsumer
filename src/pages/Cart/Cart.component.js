import React, { useContext } from "react";
//import { connect } from "react-redux";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import CartNav from "./CartNav.component";

const Cart = () => {
   
    return (
        <>
            <SecondBanner></SecondBanner>
                <div className="container">
            <CartNav  isEditable={true} isCartPage={true}></CartNav>
            </div>
        </>
    );
};


export default Cart;
