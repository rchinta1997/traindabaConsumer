import React, { useEffect, useState, useContext, createContext } from "react";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import { useLocation, useNavigate } from "react-router-dom";
import CartNav from "../Cart/CartNav.component";
import cartContext from "../../Context/cart-context";
import axios from "axios";
import { calculateTotalAmt } from "../../utility/helper"


const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const context = useContext(cartContext);
    const [passengerInfo, setPassengerInfo] = useState({});
    const [itemTotal, setItemTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [mobile, setMobile] = useState(0);
    const [gst, setGST] = useState(5);
    const [dataFromCart, setDataFromCart] = useState('');

    // Function to receive data from the cart component
    const handleDataFromCart = (data) => {
        setDataFromCart(data);
    };
    const finalConfirmation = () => {
        localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
        navigate("/Pay");
    };

    const updateKeyValue = (key, value) => {
        passengerInfo[key] = value;
        setPassengerInfo({ ...passengerInfo });
    }
    const handleChange = (e) => {
        //setIsLoading(false);
        console.log("==============handleChange=============");
        console.log(e.target.value);
        let { name, value } = e.target;
        value = e.target.value
        console.log("==============name=============" + name);
        console.log("==============value=============" + value);

        passengerInfo[name] = value;
        if (name === 'passengerName') {
            passengerInfo['user_Id'] = value;
            passengerInfo['name'] = value;
        }

        setPassengerInfo({ ...passengerInfo });
        /*setPassengerInfo({
          ...passengerInfo,
          [name]: e.target.value,
        });*/
        console.log(passengerInfo);
    };
    useEffect(() => {
        console.log("process.env.GST=" + process.env.RAZORPAY_SECRET);
        setPassengerInfo(JSON.parse(localStorage.getItem("PassengerInfo")));
        const priceObj = calculateTotalAmt(context.cart);
        console.log("priceobj", priceObj);

        //const itemTax= context.cart.reduce((acc, item) => acc + ((item.quantity * item.Selling_Price) * item.Tax)/100, 0).toFixed(2);
        let itemvalue = priceObj.itemvalue;
        const itemTax = priceObj.itemTax; // percentage(gst,(itemvalue-itemValueWithouGST));
        setTax(round(itemTax, 2));
        setTotalAmount(Math.round(Number(itemvalue) + Number(itemTax))); //round(Number(itemvalue)+ Number(itemTax),2));
        setItemTotal(round(itemvalue, 2));
    }, [context]);

    function percentage(partialValue, totalValue) {
        return (partialValue * totalValue) / 100;
    }

    function round(num, decimalPlaces = 0) {
        if (num < 0)
            return -round(-num, decimalPlaces);
        var p = Math.pow(10, decimalPlaces);
        var n = num * p;
        var f = n - Math.floor(n);
        var e = Number.EPSILON * n;

        // Determine whether this fraction is a midpoint value.
        return (f >= .5 - e) ? Math.ceil(n) / p : Math.floor(n) / p;
    }

    if (Object.keys(passengerInfo).length === 0) {
        return null;
    } else {
        return (
            <>

                <div className="page-title-section">
                    <div className="container"><h2>Checkout</h2></div>
                </div>

                <div className="page-main-container">
                    <div className="container">
                        
                        <form id="checkout" onSubmit={finalConfirmation}>
                            <div className="row">
                                <div className="col-md-4">

                                <div className="ritekhana-dashboard-box mb-3">
                                    <span className="ritekhana-dashboard-section-title">Customer Details</span>
                                    <div className="ritekhana-account-packages">
                                    <table class="table table-bordered mb-3 mt-3">
                                        <tr>
                                            <td>PNR : <strong>{passengerInfo.pnrNumber}</strong></td>
                                            <td>DATE : <strong>{passengerInfo.journeyDate}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>COACH : <strong>{passengerInfo.coachPosition}</strong></td>
                                            <td>SEAT : <strong>{passengerInfo.berthNo}</strong></td>
                                        </tr>
                                    </table>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Passenger Name"
                                                        pattern="^[a-zA-Z ]+$"
                                                        name="passengerName"
                                                        id="passengerName"
                                                        className="form-control"
                                                        required
                                                        //onKeyUp={(e)=>updateKeyValue('passengerName',e.target.value)}
                                                        onChange={handleChange}
                                                        value={passengerInfo.passengerName}
                                                    //defaultValue={passengerInfo.passengerName}
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        required
                                                        // onKeyUp={(e)=>updateKeyValue('email',e.target.value)} 
                                                        onChange={handleChange}
                                                        value={passengerInfo.email}
                                                    //defaultValue={passengerInfo.email}
                                                    >
                                                    </input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Mobile Number"
                                                        pattern="^[6789]\d{9,9}$"
                                                        name="mobileNumber"
                                                        className="form-control"
                                                        id="mobileNumber"
                                                        min="10"
                                                        maxLength="10"
                                                        minLength="10"
                                                        required
                                                        //onKeyUp={(e)=>updateKeyValue('mobileNumber',e.target.value)}
                                                        onChange={handleChange}
                                                        value={passengerInfo.mobileNumber}
                                                    //defaultValue={passengerInfo.mobileNumber}
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea type="text" placeholder="Instructions" className="form-control" name="instructions" onKeyUp={(e) => updateKeyValue('instructions', e.target.value)} defaultValue={passengerInfo.instructions}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-8">
                                    <CartNav isEditable={true} isCartPage={false} onData={handleDataFromCart}></CartNav>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="text-right">
                                                Subtotal:{" "}
                                                <span className="final_total">
                                                    <b>{itemTotal} </b>
                                                </span>
                                            </h6>
                                            <p className="text-right">
                                                GST:{" "}
                                                <span className="final_total">
                                                    <b>{tax} </b>
                                                </span>
                                            </p>
                                            <h5 className="text-right">
                                                Total Payabe:{" "}
                                                <span className="final_total">
                                                    <b>{totalAmount}</b>
                                                </span>
                                            </h5>
                                            <div className="text-right mt-5">
                                                <input type="submit" value="Proceed to Pay" className="proceed-btn"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
};

export default Checkout;
