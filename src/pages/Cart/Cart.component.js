import React, { useContext } from "react";
//import { connect } from "react-redux";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import CartNav from "./CartNav.component";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const localOutletInfo= JSON.parse(localStorage.getItem("EachOutletInfo"))

    const navigateToBack= () =>{
    navigate("/RestaurantInfo", { state: { MenuData: localOutletInfo} });
        }
    
    return (
        <>
            {/* <SecondBanner></SecondBanner> */}

            <div className="page-title-section">
                <div className="container"><h2>Cart</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                <p onClick={navigateToBack} className="btn btn-outline-default mb-3"><i className="fas fa-angle-left" aria-hidden="true"></i> Back</p>
                    <CartNav isEditable={true} isCartPage={true}></CartNav>
                </div>
            </div>
        </>
    );
};


export default Cart;
