import React, { useContext } from "react";
//import { connect } from "react-redux";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import CartNav from "./CartNav.component";

const Cart = () => {
   
    return (
        <>
            <SecondBanner></SecondBanner>
            <div className="ritekhana-main-content">
                <div className="ritekhana-main-section">
            <CartNav  isEditable={true} isCartPage={true}></CartNav>
            </div>
            </div>
        </>
    );
};


export default Cart;
