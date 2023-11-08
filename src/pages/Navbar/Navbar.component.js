import React, { useState, useEffect, useContext } from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import cartContext from "../../Context/cart-context";
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    var istokenexists = false;
    const context = useContext(cartContext);
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(context);
    }, [context]);

    const ProceedToCart = () => {
        navigate("/cart");
    };

    const [isToggled, setIsToggled] = useState(false);

    const toggleMenu = () => {
        setIsToggled(!isToggled);
    };


    const routeClickHandler = (event, type) => {

        if (type === "Login") {
            navigate("/Login");
            setIsToggled(false);
        }
        else if (type === "TrackOrder") {
            navigate("/TrackOrder");
            setIsToggled(false);
        }
        else if (type === "pnrstatus") {
            navigate("/pnrstatus");
            setIsToggled(false);
        }
        else if (type === "trainrunningstatus") {
            navigate("/trainrunningstatus");
            setIsToggled(false);
        }
        else if (type === "livestation") {
            navigate("/livestation");
            setIsToggled(false);
            
        }
        else if (type === "trainschedule") {
            navigate("/trainschedule");
            setIsToggled(false);
        }
        else if (type === "MyOrders") {
            navigate("/MyOrders");
            setIsToggled(false);
        }
        else if (type === "My Account") {
            //navigate("/Profile");
            setIsToggled(false);
        }
        else if (type === "Logout") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/Login");
            setIsToggled(false);
        }
        else if (type === "Profile") {
            navigate("/Profile");
            setIsToggled(false);
        }
        else {
            navigate("/");
            setIsToggled(false);
        }


    }

    const _token = localStorage.getItem("token");
    if (_token) {
        istokenexists = true;
    }

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <>
            <div className="container d-flex align-items-center justify-content-between">
                <a href="#" className="logo">
                    <img src="https://traindhaba.com/assets/images/logo.png" alt="" className="img-fluid" onClick={(event) => routeClickHandler(event, "Home")}></img>
                </a>
                <nav id="navbar" className="navbar">
                    <ul className="nav">
                        {istokenexists ? <li>
                            <a href="#" onClick={(event) => routeClickHandler(event, "TrackOrder")}>
                                Track Order{" "}
                            </a>
                        </li> : <a href="#" onClick={(event) => routeClickHandler(event, "Login")}>
                            Login{" "}
                        </a>}
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">
                                Rail Tools
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "pnrstatus")}>
                                        PNR Status{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "trainrunningstatus")}>
                                        Train Running Status{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "livestation")}>
                                        Live Station{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "trainschedule")}>
                                        Train Schedule{" "}
                                    </a>
                                </li>
                            </ul>

                        </li>
                        {istokenexists ? <li className="dropdown">
                            <a href="#" className="dropdown-toggle">
                                My Account{" "}
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "Profile")}>
                                        Profile{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "MyOrders")}>
                                        My Orders{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(event) => routeClickHandler(event, "Logout")}>
                                        Logout{" "}
                                    </a>
                                </li>
                            </ul>
                        </li> : null}
                        <li>
                            <a href="#!" onClick={ProceedToCart}>
                                <i className="fa fa-shopping-cart"></i>
                                <span className="cart-count">
                                    {context.cart.reduce((count, curItem) => {
                                        return count + curItem.quantity;
                                    }, 0)}{" "}
                                </span>
                            </a>
                        </li>
                    </ul>
                    <i className="fa fa-solid fa-bars mobile-nav-toggle" onClick={toggleMenu}></i>
                </nav>
            </div>

            <div className={`navbar-mobile ${isToggled ? 'active' : ''}`} >
                <i className="fa fa-solid fa-times mobile-nav-toggle" onClick={toggleMenu}></i>
                <ul className="nav">
                    {istokenexists ? <li>
                        <a href="#" onClick={(event) => routeClickHandler(event, "TrackOrder")}>
                            Track Order{" "}
                        </a>
                    </li> : <a href="#" onClick={(event) => routeClickHandler(event, "Login")}>
                        Login{" "}
                    </a>}
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle">
                            Rail Tools
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "pnrstatus")}>
                                    PNR Status{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "trainrunningstatus")}>
                                    Train Running Status{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "livestation")}>
                                    Live Station{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "trainschedule")}>
                                    Train Schedule{" "}
                                </a>
                            </li>
                        </ul>

                    </li>
                    {istokenexists ? <li className="dropdown">
                        <a href="#" className="dropdown-toggle">
                            My Account{" "}
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "Profile")}>
                                    Profile{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "MyOrders")}>
                                    My Orders{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(event) => routeClickHandler(event, "Logout")}>
                                    Logout{" "}
                                </a>
                            </li>
                        </ul>
                    </li> : null}
                    <li>
                        <a href="#!" onClick={ProceedToCart}>
                            <i className="fa fa-shopping-cart"></i>
                            <span className="cart-count">
                                {context.cart.reduce((count, curItem) => {
                                    return count + curItem.quantity;
                                }, 0)}{" "}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );

};

export default Navbar;
