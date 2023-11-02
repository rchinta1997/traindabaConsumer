import React, { useContext } from "react";
//import { connect } from "react-redux";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import CartNav from "./CartNav.component";

const Cart = () => {

    return (
        <>
            {/* <SecondBanner></SecondBanner> */}

            <div className="page-title-section">
                <div className="container"><h2>Cart</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                    <CartNav isEditable={true} isCartPage={true}></CartNav>
                </div>
            </div>
        </>
    );
};


export default Cart;
