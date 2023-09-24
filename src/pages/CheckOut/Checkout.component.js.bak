import React, { useEffect, useState,useContext } from "react";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import { useNavigate } from "react-router-dom";
import CartNav from "../Cart/CartNav.component";
import cartContext from "../../Context/cart-context";

const Checkout = () => {
    const navigate = useNavigate();
    const context = useContext(cartContext);
    const [passengerInfo, setPassengerInfo] = useState({});
    const [itemTotal,setItemTotal]=useState(0);
    const [tax,setTax]=useState(0);
    const [totalAmount,setTotalAmount]=useState(0);
    const finalConfirmation = () => {
        localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
        navigate("/Pay");
    };

    const updateKeyValue = (key,value) =>{
        passengerInfo[key]=value;
        setPassengerInfo({...passengerInfo});
    }
    useEffect(() => {
        setPassengerInfo(JSON.parse(localStorage.getItem("PassengerInfo")));
        let itemvalue=context.cart.reduce((acc, item) => acc + item.quantity * item.Selling_Price, 0).toFixed(2);
        const itemTax= context.cart.reduce((acc, item) => acc + ((item.quantity * item.Selling_Price) * item.Tax)/100, 0).toFixed(2);
        setTax(itemTax);
        setTotalAmount(Number(itemvalue)+ Number(itemTax));
        setItemTotal(itemvalue);
    
    }, []);
    if (passengerInfo === {}) {
        return null;
    } else {
        return (
            <>
                <SecondBanner></SecondBanner>
                <div className="ritekhana-main-content">
                    <div className="ritekhana-main-section">
                        <div className="container">
                            <form class="ritekhana-booking-form" id="checkout" onSubmit={finalConfirmation}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Customer Details</h5>
                                        <ul className="ritekhana-row">
                                            <li>PNR : <strong>{passengerInfo.pnrNumber}</strong></li>
                                            <li>DATE : <strong>{passengerInfo.journeyDate}</strong></li>
                                            <li>COACH : <strong>{passengerInfo.coachPosition}</strong></li>
                                            <li>SEAT : <strong>{passengerInfo.berthNo}</strong></li>
                                            <li>
                                                <input
                                                    type="text"
                                                    placeholder="Passenger Name"
                                                    pattern="^[a-zA-Z ]+$"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    onKeyUp={(e)=>updateKeyValue('passengerName',e.target.value)}
                                                    defaultValue={passengerInfo.passengerName}
                                                ></input>
                                            </li>
                                            <li>
                                                <input type="text" placeholder="Email" name="email" id="email" required onKeyUp={(e)=>updateKeyValue('email',e.target.value)} defaultValue={passengerInfo.email}></input>
                                            </li>
                                            <li>
                                                <input
                                                    type="text"
                                                    placeholder="Mobile Number"
                                                    pattern="^[6789]\d{9,9}$"
                                                    name="mobile"
                                                    id="mobile"
                                                    min="10"
                                                    maxLength="10"
                                                    minLength="10"
                                                    required
                                                    onKeyUp={(e)=>updateKeyValue('mobileNumber',e.target.value)}
                                                    defaultValue={passengerInfo.mobileNumber}
                                                ></input>
                                            </li>
                                            <li>
                                                <textarea type="text" placeholder="Instructions" name="instructions" onKeyUp={(e)=>updateKeyValue('instructions',e.target.value)} defaultValue={passengerInfo.instructions}></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <CartNav isEditable={false}></CartNav>
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
                                        <div className="ritekhana-listing-loadmore-btn">
                                            <input type="submit" value="Proceed to Pay" className="ritekhana-bgcolor"></input>
                                        </div>
                                    </div>
                                    &nbsp;
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Checkout;
