import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import cartContext from "../../Context/cart-context";

const Navbar = (props) => {
    var istokenexists = false;
    const context = useContext(cartContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(context);
    }, []);

    const ProceedToCart = () => {
        navigate("/cart");
    };

   

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
