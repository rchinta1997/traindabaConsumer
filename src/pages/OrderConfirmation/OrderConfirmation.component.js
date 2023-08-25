import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
    const [outletName, setOutletName] = useState(null);
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.res)
        setOutletName("Test Outlet");
    }, []);
    return (
        <>
            <div className="ritekhana-main-content">
                <div className="ritekhana-main-section">
                    <div className="container">
                        <form class="ritekhana-booking-form" id="checkout">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Train Details</h5>
                                    <ul className="ritekhana-row">
                                        <li>
                                            Train Name : <strong></strong>
                                        </li>
                                        <li>
                                            Station Name : <strong></strong>
                                        </li>
                                        <li>
                                            Berth : <strong></strong>
                                        </li>
                                        <li>
                                            Coach : <strong></strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5>Order Details</h5>
                                    <ul className="ritekhana-row">
                                        <li>
                                            Order Id : <strong></strong>
                                        </li>
                                        <li>
                                            Tracking id : <strong></strong>
                                        </li>
                                        <li>
                                            Booking Date : <strong></strong>
                                        </li>
                                        <li>
                                            Delivery Date : <strong></strong>
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
                                        <table id="cart_table">
                                            <thead>
                                                <tr>
                                                    <th colspan="2"><strong>Order ID #</strong></th>
                                                    
                                                    <th colspan="2">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>

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
