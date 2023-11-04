import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import styles from './TrackOrder.css';
import { convertDateTimeToIST, convertDateToIST, convertIsoToIst, convertDeliveryDate } from '../../utility/helper'


const TrackOrder = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [searchValue, setSearchValue] = useState("");
    const [MyOrders, setOrders] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(location.state?.orderId);
        if (location.state?.orderId) {
            getOrderDetailsByOrderId(location.state?.orderId);
        }
        // getOrderDetailsByOrderId("");

    }, []);

    function getOrderDetailsByOrderId(orderId) {
        let _user = JSON.parse(localStorage.getItem("user"));
        let userid = {
            User_Id: _user.id,
            Order_Id: orderId
        };

        axios
            .post(process.env.REACT_APP_API_URL + `/order/getUserOrders/`, userid)
            .then((response) => {
                console.log("===============my orders===============")
                console.log(response.data.body)
                if (response.data.success) {
                    //setIsError(false);
                    //setPnrData(response.data.body);



                    setOrders(response.data.body);
                    console.log("=============== ordersmy===============")
                    console.log(MyOrders);

                    //setPassengerInfo(passengerInfo);
                    localStorage.setItem("MyOrders", JSON.stringify(response.data.body));
                } else {
                    //setIsError(true);
                    //setPnrData(undefined);
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }

    const handleChange = (e) => {
        //setIsLoading(false);
        console.log("==============handleChange=============");
        console.log(e.target.value);
        setSearchValue(e.target.value);

    };

    const OrderDetails = (e) => {
        e.preventDefault();
        getOrderDetailsByOrderId(searchValue);
        //localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
        //navigate("/Pay");
    };

    return (
        <>
            <div className="page-title-section">
                <div className="container"><h2>Track Order</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-8 offset-md-2'>
                            <div class="card shadow">
                                <div class="card-body">
                                    <h4 class="card-title mb-5">Check Order Status</h4>
                                    <Form className="form" onSubmit={OrderDetails}>
                                        <div className='row'>
                                            <div className='form-group col-md-6'>
                                                <Input type="text" placeholder="Enter Order ID" value={searchValue} onChange={handleChange} name="order_id" required="" />
                                            </div>
                                            <div className='form-group col-md-6'>
                                                <Button color="primary">Track order</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            {Object.keys(MyOrders).length !== 0 ?
                                <div className="order-list">
                                    <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Booking Date</th>
                                                <th>Delivery Date</th>
                                                <th>Outlet Name</th>
                                                <th>Order ID</th>
                                                <th>Order Price</th>
                                                <th>Order Status</th>
                                                <th>Payment Type</th>
                                            </tr>
                                        </thead>


                                        {MyOrders.map((element) => {
                                            console.log("==========Foreach==========");
                                            console.log(element.Total_Amount?.$numberDecimal);
                                            return (

                                                <tbody>
                                                    <tr>
                                                        <td>{convertIsoToIst(element.Booking_Date)}</td>
                                                        <td>{convertDeliveryDate(element.Delivery_Date)}</td>
                                                        <td>{element.Outlet_Id.OutletName}</td>
                                                        <td>{element.Order_Id}</td>
                                                        <td>Rs. {element?.Total_Amount?.$numberDecimal}/-</td>
                                                        <td>{element?.Order_Status_Id?.OrderStatus.replace("ORDER_", "")}</td>
                                                        <td>{element.Payment_Mode}</td>

                                                    </tr>
                                                </tbody>
                                            );

                                        })}

                                    </table>
                                    </div>
                                </div> : null}
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default TrackOrder;
