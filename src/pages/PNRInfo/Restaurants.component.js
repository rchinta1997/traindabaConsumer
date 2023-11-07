import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import CartContext from "../../Context/cart-context";
import { Toast } from 'primereact/toast';

const Restaurants = (props) => {
    const location = useLocation();
    const context = useContext(CartContext);
    const navigate = useNavigate();

    const [menuItems, setMenuItems] = useState([]);
    const [outletData, setOutletData] = useState({});

    const [selectedRange, setSelectedRange] = useState('all');
    const [isAddItemMsg, setIsAddItemMsg] = useState(false);
    const toast = useRef(null);


    const handleRangeChange = (event) => {
        setSelectedRange(event.target.value);
    };

    const filteredItems = menuItems.filter((item) => {
        if (selectedRange === 'all') {
            return item;
        } else if (selectedRange === 'veg') {
            return item.Is_Vegetarian;
        } else if (selectedRange === 'nonveg') {
            return item.Is_Non_Vegetarian;
        } else {
            return false;
        }
    });


    const cartItems = context.cart.map((item, index) => {
        if (localStorage.getItem("currentMenuItem") != undefined && localStorage.getItem("currentMenuItem") != null && localStorage.getItem("currentMenuItem") != "") {
            if (localStorage.getItem("currentMenuItem") != undefined && localStorage.getItem("currentMenuItem") != null && localStorage.getItem("currentMenuItem") != "") {
                let _menuItem = JSON.parse(localStorage.getItem("currentMenuItem"));
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'You added ' + _menuItem.Item_Name + ' successfully.', life: 3000 });
                console.log("context items=", _menuItem.Item_Name);
                localStorage.setItem("currentMenuItem", "");
            }
        }

        return false;
    });


    const ProceedToCart = () => {
        var _user = JSON.parse(localStorage.getItem("user"));

        console.log("_user", _user);
        if (!_user || _user == null || _user == undefined) {
            localStorage.setItem("isProccedToPay", 1);
            alert("Please login, before going to procced to pay");
            navigate("/login");
        }
        else {
            navigate("/Cart");
        }

    };

    useEffect(() => {
        setOutletData(location.state.MenuData);
        axios
            .get(process.env.REACT_APP_API_URL + `/MenuItems/getMenuItemsByOutlet/${location.state.MenuData._id}`)
            .then((response) => {
                if (response.data.success) {
                    let isActiveData = _.filter(response.data.body, function (o) {
                        console.log("gst", o["isGST"]);
                        if (o["isGST"] == undefined) {
                            o["isGST"] = o["Tax"] && o["Tax"] !== '' ? true : false;
                        }
                        o["Selling_Price"] = Math.round(o["Selling_Price"]);


                        return o.isActive;
                    });

                    setMenuItems(isActiveData);
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, []);

    return (
        <>
            <div className="page-title-section">
                <div className="container"><h2>{outletData.OutletName}</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                <a href="/" className="btn btn-outline-default mb-3"><i className="fas fa-angle-left" aria-hidden="true"></i> Back</a>
                    <div className="row">
                        <div className="col-md-7">

                            <div class="form-check form-check-inline pl-0">
                                <input
                                    type="radio"
                                    value="all"
                                    id="all"
                                    checked={selectedRange === 'all'}
                                    onChange={handleRangeChange}
                                    className="radio-input-group"
                                />
                                <label class="form-check-label" for="all"> &nbsp;All Items</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    type="radio"
                                    value="veg"
                                    id="veg"
                                    checked={selectedRange === 'veg'}
                                    onChange={handleRangeChange}
                                    className="radio-input-group"
                                />
                                <label class="form-check-label" for="veg"> &nbsp;Veg</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    type="radio"
                                    value="nonveg"
                                    id="nonveg"
                                    checked={selectedRange === 'nonveg'}
                                    onChange={handleRangeChange}
                                    className="radio-input-group"
                                />
                                <label class="form-check-label" for="nonveg"> &nbsp;Non Veg</label>
                            </div>
                           <p>Min Order : <b>{outletData.Min_Order}</b> &nbsp;&nbsp;&nbsp; Min Timing : <b>{outletData.Order_Timing}</b></p>
                        </div>
                        <div className="col-md-5 text-right">
                            {context.cart.length > 0 &&
                                    <a href="#!" onClick={ProceedToCart} className="proceed-btn">
                                        Proceed to Cart
                                    </a>

                            }
                        </div>
                    </div>

                    <div className="row">

                        {filteredItems.map((eachData, index) => {
                            return (
                                <div key={index} className="col-md-6">

                                    <div class="vendor-food-card shadow px-3 py-3">
                                        <div class="vendor-food-content">
                                            {eachData.Is_Vegetarian && (
                                                    <>
                                                        <img className="food-type-icon" src={require("../../Assets/Images/veg.png")}
                                                        />
                                                    </>
                                                )}
                                            {eachData.Is_Non_Vegetarian && (
                                                <img className="food-type-icon" src={require("../../Assets/Images/non-veg.png")}
                                                />
                                            )}

                                                <p class="font-wight vendor-food-desc">{eachData.Item_Name}<br></br><small>{eachData.Description}</small></p>
                                                <p class="food-price">₹ {eachData.Selling_Price}</p>
                                        </div>
                                        <div class="vendor-food-logo">
                                            <img className="cart-item__image" src={require("../../Assets/Images/placeholder-img.jpg")} />
                                            <a href="javascript:;" onClick={context.addItemToCart.bind(this, eachData)} class="btn btn-white">ADD +</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Toast ref={toast} />
        </>
    );
};

export default Restaurants;
