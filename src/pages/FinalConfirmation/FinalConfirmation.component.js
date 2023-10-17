import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartNav from "../Cart/CartNav.component";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import cartContext from "../../Context/cart-context";
import { json, useNavigate } from "react-router-dom";
import {calculateTotalAmt} from "../../utility/helper" 

const FinalConfirmation = () => {
    const context = useContext(cartContext);
    const [passegnerInfo, setPassengerInfo] = useState({});
    const [itemTotal,setItemTotal]=useState(0);
    const [tax,setTax]=useState(0);
    const [totalAmount,setTotalAmount]=useState(0);
    const [gst,setGST]=useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        setPassengerInfo(JSON.parse(localStorage.getItem("PassengerInfo")));
        console.log(passegnerInfo)
        const priceObj = calculateTotalAmt(context.cart);
        
        //const itemTax= context.cart.reduce((acc, item) => acc + ((item.quantity * item.Selling_Price) * item.Tax)/100, 0).toFixed(2);
        let itemvalue = priceObj.itemvalue;
        const itemTax = priceObj.itemTax; // percentage(gst,(itemvalue-itemValueWithouGST));
        setTax(round(itemTax,2));
        setTotalAmount(Math.round(Number(itemvalue)+ Number(itemTax))); // setTotalAmount(round(Number(itemvalue)+ Number(itemTax),2));
        setItemTotal(round(itemvalue,2));
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

    async function cash_on_delivery(e){
        e.preventDefault();
      alert("COD");
      const res= await sendRequest(1);
      navigate("/OrderConfirmation", { state: { res: res } });
    }

    function percentage(partialValue, totalValue) {
        return  (partialValue * totalValue)/100;
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

    async function clickHandler(event, type){
        //alert("COD");
        const res= await sendRequest(1);
        //navigate("/OrderConfirmation", { state: { res: res } });
    }

    async function sendRequest(paymentType) {
        let _user = JSON.parse(localStorage.getItem("user"));
        console.log("_user",_user);
        let order_response = {           
            orderDetails:'',
            paymentDetails:''
        }
        if(paymentType === 0){
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
    }
    let user = JSON.parse(localStorage.getItem("user"));
    if(user !== undefined){
        let userId = user?.id ? user.id+"" : "";
        passegnerInfo.user_Id=  userId ;
    }
    if(passegnerInfo.pnrNumber){
        passegnerInfo.pnr=passegnerInfo.pnrNumber;
    }
        let orderData = {
            passegnerInfo: passegnerInfo,
            MenuItems: context.cart,
            coupons:[],
            orderSource:'TrainDhabaWebsite',
            payment_Mode:paymentType,
            Total_Amount: totalAmount+""
        };
        console.log(orderData);      
        axios
            .post(process.env.REACT_APP_API_URL + "/order/createOrder", orderData)
            .then((response) => {
                console.log("========createOrder==response========");
                console.log(response.data.body);
                if (response.data.success) {
                    order_response.orderDetails = response.data.body;
                    order_response.orderDetails.Booking_Date = order_response.orderDetails.Booking_Date;
                    console.log(response.data.body);
                    console.log("========order_response==response========");
                    console.log(order_response)
                    if(paymentType === 0){

                    const amount = response.data.body.Amount_Payable ? Number(response.data.body.Amount_Payable.$numberDecimal.toString()) :  Number(response.data.body.Amount_Payable) ; // Number(response.data.body.Amount_Payable.$numberDecimal.toString());
                    const id = response.data.body.OrderDetails? response.data.body.OrderDetails.id : response.data.body.Order_Id; //  response.data.body.Order_Id; // response.data.body.id;
                    const currency =response.data.body.OrderDetails ? response.data.body.OrderDetails.currency : 'INR'; // response.data.body.currency;
                    const options = {
                        key: response.data.body.RAZOR_API_KEY, // Enter the Key ID generated from the Dashboard
                        amount: amount * 100 ,
                        currency: currency,
                        name: passegnerInfo.passengerName,
                        description: "Train Dhaba",
                        order_id: response.data.body.RazorPayOrderID, // id,
                        handler: async function (response) {
                            console.log("========Razorpay===response===start====");
                            const data = {
                                orderCreationId: id,
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpaySignature: response.razorpay_signature,
                            };

                            //const result = await axios.post('/payment/success', data);
                            console.log("========Razorpay===response=======");
                            console.log(data);
                            console.log(response);
                            //alert(JSON.stringify(response));
                            order_response.paymentDetails = data;
                            navigate("/OrderConfirmation", { state: { res: order_response } });
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
                    console.log("========Razorpay==========");
                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                }
                else
                {
                    navigate("/OrderConfirmation", { state: { res: order_response } });
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
                            
                         <a  onClick={(event) => clickHandler(event, "Login")}   className="ritekhana-header-btn" id="cod1">
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
