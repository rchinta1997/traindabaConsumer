import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartNav from "../Cart/CartNav.component";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import cartContext from "../../Context/cart-context";
import { useNavigate } from "react-router-dom";

const FinalConfirmation = () => {
    const context = useContext(cartContext);
    const [passegnerInfo, setPassengerInfo] = useState({});
    const [itemTotal,setItemTotal]=useState(0);
    const [tax,setTax]=useState(0);
    const [totalAmount,setTotalAmount]=useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setPassengerInfo(JSON.parse(localStorage.getItem("PassengerInfo")));
        let itemvalue=context.cart.reduce((acc, item) => acc + item.quantity * item.Selling_Price, 0).toFixed(2);
        const itemTax= context.cart.reduce((acc, item) => acc + ((item.quantity * item.Selling_Price) * item.Tax)/100, 0).toFixed(2);
        setTax(itemTax);
        setTotalAmount(Number(itemvalue)+ Number(itemTax));
        setItemTotal(itemvalue);
    }, []);
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function cash_on_delivery(){
      const res= await sendRequest(1);
      navigate("/OrderConfirmation", { state: { res: res } });
    }


    async function sendRequest(paymentType) {
        if(paymentType === 0){
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
    }
        let orderData = {
            passegnerInfo: passegnerInfo,
            MenuItems: context.cart,
            coupons:[],
            orderSource:'TrainDhabaWebsite',
            payment_Mode:paymentType
        };
        console.log(orderData);
        axios
            .post(process.env.REACT_APP_API_URL + "/order/createOrder", orderData)
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.body);
                    if(paymentType === 0){
                    const amount = Number(response.data.body.Amount_Payable.$numberDecimal.toString());
                    const id = response.data.body.id;
                    const currency = response.data.body.currency;
                    const options = {
                        key: process.env.REACT_APP_RAZOR_API_KEY, // Enter the Key ID generated from the Dashboard
                        amount: amount * 100 ,
                        currency: currency,
                        name: passegnerInfo.passengerName,
                        description: "Train Dhaba",
                        order_id: id,
                        handler: async function (response) {
                            const data = {
                                orderCreationId: id,
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpaySignature: response.razorpay_signature,
                            };

                            //const result = await axios.post('/payment/success', data);

                            alert(response);
                        },
                        prefill: {
                            name: passegnerInfo.passengerName,
                            email: passegnerInfo.email,
                            contact: passegnerInfo.mobileNumber,
                        },
                        notes: {
                            address: "Test Office",
                        },
                        theme: {
                            color: "#61dafb",
                        },
                    };

                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                }
                }
                else{
                    return response.data.body;
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }

    async function payOnline(){
       await sendRequest(0);
    }
    return (
        <>
            <SecondBanner></SecondBanner>
            <div className="ritekhana-main-content">
                <div className="ritekhana-main-section">
                    <div className="container">
                        <div className="ritekhana-dashboard-box">
                            <span className="ritekhana-dashboard-section-title">Confirm your deatils</span>
                            <div className="ritekhana-account-packages">
                                <div className="ritekhana-account-packages-head">
                                    <span>{passegnerInfo.passengerName}</span>
                                </div>
                                <div className="ritekhana-account-packages-head">
                                    <span>{passegnerInfo.email}</span>
                                </div>
                                <div className="ritekhana-account-packages-head">
                                    <span>{passegnerInfo.mobileNumber}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <CartNav isEditable={false}></CartNav>
                                <h6 className="text-right">
                                    Subtotal:{" "}
                                    <span className="final_total">
                                        <b>₹ {itemTotal}</b>
                                    </span>
                                </h6>
                                <p className="text-right">
                                    GST:{" "}
                                    <span className="final_total">
                                        <b>₹ {tax}</b>
                                    </span>
                                </p>
                                <h5 className="text-right">
                                    Total Payabe:{" "}
                                    <span className="final_total">
                                        <b>₹ {totalAmount}</b>
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="text-center">
                            <a onClick={payOnline} className="ritekhana-header-btn" id="rzp-button1">
                                Proceed to pay Online
                            </a>
                            <a onclick={cash_on_delivery} className="ritekhana-header-btn" id="cod">
                                Cash On Delivery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinalConfirmation;
