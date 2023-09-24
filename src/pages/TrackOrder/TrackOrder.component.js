import React, { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
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


const TrackOrder = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [MyOrders, setOrders] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
   // getOrderDetailsByOrderId("");
    
}, []);

function getOrderDetailsByOrderId(orderId)
{
    let userid ={
        User_Id:"64e9f28975e4d54ee5428462",
        Order_Id:orderId
    } ;
    axios
    .post(process.env.REACT_APP_API_URL + `/order/getUserOrders/`,userid)
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
    <div className="ritekhana-main-content home-page">         
    <div className="ritekhana-main-section ritekhana-services-view1-full" >
    <div class="ritekhana-main-section">
    <div class="container">
        <div class="row">

            <div class="col-md-6 offset-md-3">
            <div className="ritekhana-fancy-title">
                        <h2 className="ritekhana-color">Track Order</h2>                       
                    </div>
                <div className="ritekhana-contact-form">
                <Form className="form" onSubmit={OrderDetails}>
                        
                        <h4>Enter Order ID</h4>
                        <ul>
                        <FormGroup>
                            <li><Input type="text" placeholder="Order ID" value={searchValue} onChange={handleChange} name="order_id" required="" /></li>
                        </FormGroup>
                       
                            <li> <Button color="primary"  >Submit</Button> </li>
                       

                        </ul>
                    </Form>

                                                <h4>ETA : </h4>
                                        </div>

            {Object.keys(MyOrders).length != 0? 
            <div className="ritekhana-recet-order-list">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Order Price</th>
                            <th>Status</th>
                            {/* <th>Detail</th> */}
                        </tr>
                    </thead>
                    
                    
                    {MyOrders.map((element) => {
                        console.log("==========Foreach==========");
                        console.log( element.Total_Amount.$numberDecimal );
                        return(

                            <tbody>
                                 <tr>
                                    <td>{element.Booking_Date}</td>
                                    <td>{element.Order_Id}</td>
                                    <td>{element.Total_Amount.$numberDecimal}</td>
                                    <td>ORDER ACCEPTED</td>
                                    {/* <td>{element.Order_Id}</td> */}
                                   
                                </tr>
                            </tbody>
                        );
                        
                        
                        })}
                                                        
                </table>
            </div>:null}
            </div>

        </div>
    </div>
</div>
</div>
</div>
  );
};

export default TrackOrder;
