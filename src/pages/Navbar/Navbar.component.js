import React, { useState, useEffect, useContext } from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import cartContext from "../../Context/cart-context";
import {Link} from 'react-router-dom'

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



    const routeClickHandler = (event, type) => {
    
        if (type === "Login") {
            navigate("/Login");
        }
        else if (type === "TrackOrder") {
            navigate("/TrackOrder");
        }
        else if (type === "MyOrders") {
            navigate("/MyOrders");
        }
        else if (type === "My Account") {
            //navigate("/Profile");
        }
        else if (type === "Logout") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/Login");
        }
        else if (type === "Profile") {
            navigate("/Profile");
        }
        else {
            navigate("/");
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
        <div className="container d-flex align-items-center justify-content-between">
            <a href="#" className="logo">
                <img src="https://traindhaba.com/assets/images/logo.png" alt="" className="img-fluid" onClick={(event) => routeClickHandler(event, "Home")}></img>
            </a>
            <nav id="navbar" className="navbar">
                <ul>
                  
                    {istokenexists ? <li>
                        <a href="#" onClick={(event) => routeClickHandler(event, "TrackOrder")}>
                            Track Order{" "}
                        </a>
                    </li> :  <a href="#" onClick={(event) => routeClickHandler(event, "Login")}>
                                            Login{" "}
                                        </a>}                       
                      
                  
                    {/* {istokenexists ? <li>
                        <a href="#" onClick={(event) => routeClickHandler(event, "MyOrders")}>
                            My Orders{" "}
                        </a>
                    </li> : null} */}
                    <li className="dropdown">
                        <a href="#rail_tools_area">
                            <span onClick={toggleProfile}>Rail Tools</span>
                            {showProfile}
                        </a>
                        {showProfile && (
                            <ul>
                                <Link to="/pnrstatus">
                                <li>
                                    PNR Status
                                </li>
                                </Link>
                                <Link to="/trainrunningstatus">
                                <li>
                                    Train Running Status
                                </li>
                                </Link>
                                <Link to="/livestation">
                                <li>
                                    Live Station
                                </li>
                                </Link>
                                <Link to="/trainschedule">
                                <li>
                                  Train Schedule
                                </li>
                                </Link>
                            </ul>
                        )}
                    </li>

                    {istokenexists ? <li className="dropdown">
                        
                        <a href="#" >
                           My Account{" "}
                        </a>
                        <ul>
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

                    {/* { istokenexists ?<li>                           
   

    const routeClickHandler = (event, type) => {
        if(type === "Login")
        {
            navigate("/Login");
        }  
        else if(type === "TrackOrder")  
        {
            navigate("/TrackOrder");       
        }
        else if(type === "MyOrders")  
        {
            navigate("/MyOrders");       
        }
        else if(type === "Profile")
        {
            navigate("/Profile");       
        }
        else if(type === "Logout")
        {
            localStorage.removeItem("token");
            navigate("/Login");
        }
        else if(type === "OrderStatus")
        {
            navigate("/orderstatus");
        }
        else
        {
            navigate("/");
        }     
           
        
    }
   
    const _token = localStorage.getItem("token");
    if(_token)
    {
        istokenexists = true;
    }
        return (
            <div className="container d-flex align-items-center justify-content-between"> 
                <a href="#" className="logo">
                    <img src="https://traindhaba.com/assets/images/logo.png" alt="" className="img-fluid" onClick={(event) => routeClickHandler(event, "Home")}></img>
                </a>
    
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>                           
                            <a href="#" onClick={(event) => routeClickHandler(event, "TrackOrder")}>
                                <i className="fa fa-user"></i> Track Order{" "}
                            </a>
                        </li>
                        { istokenexists ?<li>
                            <a href="#"  onClick={(event) => routeClickHandler(event, "MyOrders")}>
                                <i className="fa fa-user"></i> My Orders{" "}
                            </a>
                        </li> : null }
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
                                           
                        {/* { istokenexists ?<li>                           
                         <a href="#"  onClick={(event) => routeClickHandler(event, "Profile")}>
                             <i className="fa fa-user"></i> Profile{" "}
                         </a>
                       </li>: null } */}


                    {/* <li className="dropdown">
                        <a href="#">
                            <span className="fa fa-user" onClick={toggleProfile}>
                                {showProfile}
                            </span>
                        </a>
                        {showProfile && (
                            <ul>
                                <li>
                                    <a href="#">Profile</a>
                                </li>
                                <li>
                                    <a href="#">Settings</a>
                                </li>
                                <li>
                                    {istokenexists ? <li>
                                        <a href="#" onClick={(event) => routeClickHandler(event, "Logout")}>
                                            Logout{" "}

                                        </a>
                                    </li> : null}
                                    {!istokenexists ? <li>
                                        <a href="#" onClick={(event) => routeClickHandler(event, "Login")}>
                                            Login{" "}
                                        </a>
                                    </li> : null}
                                </li>
                            </ul>
                        )}

                    </li> */}



                    {/* { istokenexists ?<li>
                            <a href="#"  onClick={(event) => routeClickHandler(event, "Logout")}>
                                <i className="fa fa-user"></i> Logout{" "}
                                <i></i>Settings
                        { istokenexists ?<li>
                            <a href="#"  onClick={(event) => routeClickHandler(event, "Logout")}>
                                <i className="fa fa-user"></i> Logout{" "}
                            </a>
                        </li> : null }
                        { !istokenexists ?<li>
                         <a href="#" onClick={(event) => routeClickHandler(event, "Login")}>
                             <i className="fa fa-user"></i> Login{" "}
                         </a>
                       </li>:null }
                       
                        */}
                    <li>
                        <a href="#!" onClick={ProceedToCart}>
                            <i className="fa fa-shopping-cart"></i>
                            <span className="cart-count" style={{ borderRadius: "6px" }}>
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
