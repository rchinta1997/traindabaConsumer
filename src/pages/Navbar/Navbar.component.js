import React, { useEffect, useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import cartContext from "../../Context/cart-context";

const Navbar = (props) => {
    const context = useContext(cartContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(context);
    }, []);

    const ProceedToCart = () => {
        navigate("/cart");
    };

    return (
        <div className="container d-flex align-items-center justify-content-between">
            <a href="https://traindhaba.com/" className="logo">
                <img src="https://traindhaba.com//assets/images/logo.png" alt="" className="img-fluid"></img>
            </a>

            <nav id="navbar" className="navbar">
                <ul>
                    <li>
                        <a className="nav-link scrollto" href="https://traindhaba.com/track-order">
                            Track Order
                        </a>
                    </li>
                    <li className="dropdown">
                        <a href="#rail_tools_area">
                            <span>Rail Tools</span> <i className="fa fa-solid fa-angle-down"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="#">PNR Status</a>
                            </li>
                            <li>
                                <a href="#">Train Running Status</a>
                            </li>
                            <li>
                                <a href="#">Live Station</a>
                            </li>
                            <li>
                                <a href="#">Train Schedule</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://traindhaba.com/account">
                            <i className="fa fa-user"></i> Login{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#!" onClick={ProceedToCart}>
                            <i className="fa fa-shopping-cart"></i>
                            <span className="fa-layers-counter ritekhana-bgcolor cart-count" style={{ borderRadius: "6px" }}>
                                {context.cart.reduce((count, curItem) => {
                                    return count + curItem.quantity;
                                }, 0)}{" "}
                            </span>
                        </a>
                    </li>
                </ul>
                <i className="fa fa-solid fa-bars mobile-nav-toggle"></i>
            </nav>
        </div>
    );
};

export default Navbar;
