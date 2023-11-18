import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cartContext from "../../Context/cart-context";
import dayjs from "../../helpers/dayjs-helpers";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import axios from "axios";

const OrderConfirmation = (props) => {
    const navigate= useNavigate()
    const [orderData, setOrderData] = useState({});
    const [outletName, setOutletName] = useState(null);
    const [currentDate, setCurrentDate] = useState();
    const location = useLocation();
    const context = useContext(cartContext);

      // Function to handle the storage event
    const handleStorageChange = () => {
    const _token = localStorage.getItem("token");
    if (!(_token)) {
    // If token is not present, navigate to the login page
            
    navigate("/Login");
    }
    };

    useEffect(() => {
    // Add an event listener for the "storage" event
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener on component unmount
    return () => {
    window.removeEventListener("storage", handleStorageChange);
    };
    }, []);


    useEffect(() => {
        console.log("===========OrderConfirmation=================")
        var curr = new Date().toLocaleDateString();
        console.log(location.state.res);
                let amount = '';
        let orderDetails = location.state.res?.orderDetails;
                if (typeof orderDetails == 'object') {
            if (typeof orderDetails?.Booking_Date == 'string') {
                dayjs.extend(customParseFormat);
                orderDetails.Booking_Date = dayjs().format('YYYY-MM-DD HH:mm');
            }
            if (typeof orderDetails?.Delivery_Date == 'string') {
                dayjs.extend(utc);
                dayjs.extend(timezone);
                const dayjsLocal = dayjs(orderDetails.Delivery_Date);
                const dayjsIst = dayjsLocal.tz('Asia/Calcutta');
                orderDetails.Delivery_Date = dayjsIst.format('YYYY-MM-DD HH:mm');
            }
            if (typeof orderDetails?.Total_Amount == 'object') {
                location.state.res.orderDetails.Total_Amount = location.state.res.orderDetails?.Total_Amount?.$numberDecimal;
                context.setEmptyCart("EMPTY_CART");
            }
        }
        setOrderData(location.state.res.orderDetails);
        sendOrderStatusEmail(location.state.res.passegnerInfo);
        console.log("===========OrderConfirmation=================" + JSON.stringify(orderData));
        setOutletName("Test Outlet");
        setCurrentDate(curr);
        context.cart.reduce((count, curItem) => {
            console.log("=========context.cart.reduce============")
            console.log(curItem)
            return count + curItem.quantity;
        }, 0)
        context.cart.map((cartItem, index) => {
            console.log("===========context.cart.map====================" + cartItem._id)
            context.setEmptyCart("REMOVE")
            console.log(context.cart);
        });
    }, [context]);


    const sendOrderStatusEmail = (passegnerInfo) => {
        let orderdata = {
            "orderId": orderData._id,
            "email": passegnerInfo.email
        }
        axios
            .post(process.env.REACT_APP_API_URL + "/order/sendOrderSuccessEmail", orderdata)
            .then((response) => {
                console.log(response)
                if (response.data.success) {


                }
                else {

                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    };



    const navigateToBack=() =>{
        navigate("/Pay")
    }


    return (
        <>
            <div className="page-title-section">
                <div className="container"><h2>Order Confirmation</h2></div>
            </div>

            <div className="page-main-container">
                <div className="container">
                <p className="btn btn-outline-default mb-3" onClick={navigateToBack}><i className="fas fa-angle-left" aria-hidden="true"></i> Back</p>
                    <form className="ritekhana-booking-form float-unset" id="checkout">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="ritekhana-dashboard-box mb-3">
                                    <span className="ritekhana-dashboard-section-title">Train Details</span>
                                    <div className="ritekhana-account-packages mt-3">
                                        <ul className="ritekhana-row">
                                            <li>
                                                Train Name : <strong>{orderData.Train_Name}</strong>
                                            </li>
                                            <li>
                                                Station Name : <strong>{orderData.StationName}</strong>
                                            </li>
                                            <li>
                                                Berth : <strong>{orderData.Berth}</strong>
                                            </li>
                                            <li>
                                                Coach : <strong>{orderData.Coach}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="ritekhana-dashboard-box mb-3">
                                    <span className="ritekhana-dashboard-section-title">Order Details</span>
                                    <div className="ritekhana-account-packages mt-3">
                                        <ul className="ritekhana-row">
                                            <li>
                                                Order Id : <strong>{orderData?.Order_Id}</strong>
                                            </li>
                                            <li>
                                                Tracking id : <strong>{orderData?.Order_Id}</strong>
                                            </li>
                                            <li>
                                                Booking Date : <strong>{orderData.Booking_Date}</strong>
                                            </li>
                                            <li>
                                                Delivery Date : <strong>{orderData.Delivery_Date}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            &nbsp;
                        </div>
                        <div className="row">
                            <div class="col-md-12">
                                <h6 className="mb-3">
                                    Payment Mode:{" "}
                                    <span className="final_total">
                                        <b>{orderData.Payment_Mode} </b> &nbsp;
                                    </span>
                                </h6>
                            </div>
                            {/* <div class="col-md-12 ml-4">
                                <h6 className="mb-3">
                                    OutletName:{" "}
                                    <span className="final_total">
                                        <b>{orderData.MenuItems[0].outletName} </b> &nbsp;
                                    </span>
                                </h6>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ritekhana-recet-order-list">
                                    <table id="order_table" className="table table-bordered">
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
                                                <td>Rs. {orderData.Total_Amount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderConfirmation;
