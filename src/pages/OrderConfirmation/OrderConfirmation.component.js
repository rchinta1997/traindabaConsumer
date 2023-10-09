import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import cartContext from "../../Context/cart-context";

const OrderConfirmation = () => {
    const [orderData, setOrderData] = useState({});
    const [outletName, setOutletName] = useState(null);
    const [currentDate, setCurrentDate] = useState();
    const location = useLocation();
    const context = useContext(cartContext);

       
    useEffect(() => {
        console.log("===========OrderConfirmation=================")
        var curr = new Date().toLocaleDateString();
        console.log(location.state.res);
        let amount = '';
        if(typeof location.state.res?.orderDetails?.Total_Amount == 'object'){
            location.state.res.orderDetails.Total_Amount = location.state.res.orderDetails?.Total_Amount?.$numericeDecimal;
        }
        setOrderData(location.state.res.orderDetails);
        console.log("===========OrderConfirmation================="+JSON.stringify(orderData));      
        setOutletName("Test Outlet");
        setCurrentDate(curr);
        context.cart.reduce((count, curItem) => {
            console.log("=========context.cart.reduce============")
            console.log(curItem)
            return count + curItem.quantity;
        }, 0)
        context.cart.map((cartItem, index) => {
            console.log("===========context.cart.map===================="+cartItem._id)
            context.removeItemFromCart.bind(this, cartItem._id)
        });
    }, []);
    return (
        <>
            <div className="ritekhana-main-content">
                <div className="ritekhana-main-section">
                    <div className="container">
                        <form className="ritekhana-booking-form" id="checkout">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Train Details</h5>
                                    <ul className="ritekhana-row">
                                        <li>
                                            Train Name : {orderData.Train_Name}<strong></strong>
                                        </li>
                                        <li>
                                            Station Name : {orderData.Coach}<strong></strong>
                                        </li>
                                        <li>
                                            Berth : {orderData.Berth}<strong></strong>
                                        </li>
                                        <li>
                                            Coach : {orderData.Coach}<strong></strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5>Order Details</h5>
                                    <ul className="ritekhana-row">
                                        <li>
                                            Order Id : {orderData?.Order_Id}<strong></strong>
                                        </li>
                                        <li>
                                            Tracking id : {orderData?.Order_Id}<strong></strong>
                                        </li>
                                        <li>
                                            Booking Date : {orderData.Booking_Date}<strong></strong>
                                        </li>
                                        <li>
                                            Delivery Date : {orderData.Delivery_Date}<strong></strong>
                                        </li>
                                    </ul>
                                </div>
                                &nbsp;
                            </div>
                            <div className="row">
                                <h6 className="text-right">
                                    Outlet Name:{" "}
                                    <span className="final_total">
                                        <b>{outletName} </b>
                                    </span>
                                </h6>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="ritekhana-recet-order-list">
                                        <table id="order_table">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">Order ID #</th>
                                                    
                                                    <th colspan="2">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               <tr>
                                               <td rowSpan="2">{orderData.Order_Id}</td>
                                               <td></td>
                                               <td>{orderData.Total_Amount}</td>
                                               </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderConfirmation;
