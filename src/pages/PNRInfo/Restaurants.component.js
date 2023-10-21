import React, { useContext, useEffect, useState,useRef } from "react";
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


    const cartItems = context.cart.map((item,index) =>{ 
        if(localStorage.getItem("currentMenuItem") != undefined && localStorage.getItem("currentMenuItem") != null && localStorage.getItem("currentMenuItem") != "")
        {           
            if(localStorage.getItem("currentMenuItem") != undefined && localStorage.getItem("currentMenuItem") != null && localStorage.getItem("currentMenuItem") != "")
            {           
                let _menuItem = JSON.parse(localStorage.getItem("currentMenuItem"));
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'You added '+_menuItem.Item_Name+' successfully.', life: 3000 });
                console.log("context items=",_menuItem.Item_Name);   
                localStorage.setItem("currentMenuItem","");
            }   
        }     
       
       return false;
    });


    const ProceedToCart = () => {       
        var _user = JSON.parse(localStorage.getItem("user"));
       
        console.log("_user",_user);
        if(!_user || _user == null || _user == undefined)
        {
            localStorage.setItem("isProccedToPay",1);
            alert("Please login, before going to procced to pay");
            navigate("/login");
        }
        else
        {
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
                        console.log("gst",o["isGST"]);
                        if(o["isGST"] == undefined)
                        {
                            o["isGST"] = o["Tax"] && o["Tax"] !== '' ? true : false;
                        }
                        o["Selling_Price"] = Math.round( o["Selling_Price"]);
                       
                       
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

            <div className="ritekhana-main-content">
                <div className="ritekhana-main-section">
                    <div className="c-container">
                        <div className="row wi-100">
                            <div className="col-md-9">
                                <h5>{outletData.OutletName}</h5> <br></br>
                                 {/* Veg NonVeg */}
        <div className='container'>
        <div className="row">
            <div className="radio-button-group">

        <div className="radio-button">
            <label>
              <input
                type="radio"
                value="all"
                checked={selectedRange === 'all'}
                onChange={handleRangeChange}            

                className="radio-input-group"
              />
              All Items
            </label>
          </div>
          <div className="radio-button">    

            <label className="pl-2">
              <input
                type="radio"
                value="veg"
                checked={selectedRange === 'veg'}
                onChange={handleRangeChange}

                className="radio-input-group"
              />
              Veg
            </label>
          </div>
          <div className="radio-button">

            <label className="pl-2">
              <input
                type="radio"
                value="nonveg"
                checked={selectedRange === 'nonveg'}
                onChange={handleRangeChange}

                className="radio-input"

              />
              Non Veg
            </label>
          </div>
        </div>     
          </div>

          </div>

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
                                    
                                        {filteredItems.map((eachData, index) => {
                                            return (
                                                <div key={index} className="ritekhana-column-12">
                                                    <figure>
                                                        {/* <img className="cart-item__image" src={process.env.REACT_APP_API_URL+"/files/"+ eachData.Logo_Id?.filename} /> */}
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
                                                            <div  className="wi-50 il-flex" >
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
            <Toast ref={toast} />
        </>
    );
};

export default Restaurants;
