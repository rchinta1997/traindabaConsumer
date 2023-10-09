import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import CartContext from "../../Context/cart-context";

const Restaurants = (props) => {
    const location = useLocation();
    const context = useContext(CartContext);
    const navigate = useNavigate();

    const [menuItems, setMenuItems] = useState([]);
    const [outletData, setOutletData] = useState({});

    const ProceedToCart = () => {
        navigate("/Cart");
    };

    useEffect(() => {
        setOutletData(location.state.MenuData);
        axios
            .get(process.env.REACT_APP_API_URL + `/MenuItems/getMenuItemsByOutlet/${location.state.MenuData._id}`)
            .then((response) => {
                if (response.data.success) {
                    let isActiveData = _.filter(response.data.body, function (o) {
                        o["isGST"] = o["Tax"] && o["Tax"] !== '' ? true : false;
                        return o.isActive;
                    });

                    setMenuItems(isActiveData);
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, []);

    return (
        <>
            <SecondBanner></SecondBanner>
            <div className="ritekhana-main-content">
                <div className="ritekhana-main-section">
                    <div className="c-container">
                        <div className="row wi-100">
                            <div className="col-md-9">
                                <h5>{outletData.OutletName}</h5> <br></br>
                                Min Order : <b>{outletData.Min_Order}</b> <br></br>
                                Min Timing : <b>{outletData.Order_Timing}</b>
                            </div>
                            <div className="col-md-3">
                            {context.cart.length > 0 &&
                            <div className="ritekhana-listing-loadmore-btn">
                                            <a href="#!" onClick={ProceedToCart} className="ritekhana-bgcolor">
                                                Proceed to Cart
                                            </a>
                                        </div>
                                      
                            }
                              </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ritekhana-listing-style3 ritekhana-row">
                                    
                                        {menuItems.map((eachData, index) => {
                                            return (
                                                <div key={index} className="ritekhana-column-12">
                                                    <figure>
                                                        <img className="cart-item__image" src={require("../../Assets/Images/no-image-icon.png")} />
                                                    </figure>
                                                    <div className="ritekhana-listing-style3-text">
                                                        <div>
                                                            <div className="wi-3 il-flex">
                                                                {eachData.Is_Vegetarian && (
                                                                    <>
                                                                        <img
                                                                            style={{ width: "20px", paddingRight: "2px" }}
                                                                            src={require("../../Assets/Images/veg.png")}
                                                                        />
                                                                    </>
                                                                )}
                                                                {eachData.Is_Non_Vegetarian && (
                                                                    <img
                                                                        style={{ width: "20px", paddingRight: "2px" }}
                                                                        src={require("../../Assets/Images/non-veg.png")}
                                                                    />
                                                                )}
                                                            </div>
                                                            <div  className="wi-50 il-flex">
                                                                {eachData.Item_Name}
                                                                <a
                                                                    href="javascript:;"
                                                                    onClick={context.addItemToCart.bind(this, eachData)}
                                                                    className="ritekhana-bgcolor"
                                                                >
                                                                    <i className="fa fa-plus"></i>
                                                                </a>
                                                            </div>
                                                            <div  className="wi-3 il-flex">
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="wi-100"><small>{eachData.Description}</small></div>
                                                        <div className="wi-20"><strong className="ritekhana-bgcolor">₹ {eachData.Selling_Price}</strong></div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Restaurants;
