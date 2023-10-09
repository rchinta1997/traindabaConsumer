import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import dayjs from "../../helpers/dayjs-helpers";
import ConfirmationModal from "../../utility/confirmationmodal.component"
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
     } from "reactstrap";
  import styles from './MyOrders.css';


const MyOrders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [MyOrders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Processing');
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  const confirm = () => {
    confirmCancelOrder(selectedOrderId);
  }
  
  const ignore = () => {
    setVisible(true);
  }

  const cancelOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setVisible(true);
  };

  const confirmCancelOrder = (orderId) => {    

    axios
        .post(process.env.REACT_APP_API_URL + `/order/cancelOrders/`,orderId)
        .then((response) => {
          console.log("===============response received===============")
          console.log(response)
            if (response) {
                const updatedOrders = response.map((order) =>
                    order.orderId === selectedOrderId ? { ...order, status: 'Cancelled' } : order
              );
              setOrders(updatedOrders);
              setVisible(false);
              
            } else {
                
            }
        })
        .catch((error) => {
            console.error("Error occurred while cancelling order !", error);
            setVisible(false);
           // toast.current.show({ severity: 'error', summary: 'Failed', detail: 'Error occurred while cancelling order', life: 3000 });
        });
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Order Cancelled Successfully', life: 3000 });
        setOrders([]);
      };

  const closeConfirmationModal = () => {
    setSelectedOrderId(null);
    setVisible(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let userid ={
        User_Id:"64e9f28975e4d54ee5428462"
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
                let passengerInfo = {
                    pnrNumber: location.state.search,
                    journeyDate: response.data.body.trainInfo.dt,
                    coachPosition: response.data.body.seatInfo.coach,
                    berthNo: response.data.body.seatInfo.berth,
                    noOfSeats:response.data.body.seatInfo.noOfSeats,
                    trainNo:response.data.body.trainInfo.trainNo,
                    trainName:response.data.body.trainInfo.name
                };
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
}, []);

  
  return (
    <>
      <div className="ritekhana-main-content home-page">         
  <div className="ritekhana-main-section ritekhana-services-view1-full" >
     <div  style={{ height: '300px', overflow: 'auto' }}>
     <div className="ritekhana-column-9 ritekhana-right-padd ritekhana-left-padd">                         
        <div className="ritekhana-dashboard-box">            
        <div className="ritekhana-fancy-title">
                        <h2 className="ritekhana-color">My Orders</h2>                       
                    </div>
            <div className="ritekhana-recet-order-list">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Order Price</th>
                            <th>Status</th>
                            <th>Action</th>
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
                                    <td>{element?.Total_Amount?.$numberDecimal}</td>
                                    <td>ORDER ACCEPTED</td>
                                    <td>
                                      {element.Order_Id != null && 
                                       <button className="btn btn-danger" onClick={()=>cancelOrder(element.Order_Id)} >Cancel</button> 
                                     }
                                    </td>
                                </tr>
                            </tbody>
                        );
                        
                        
                        })}
                                                        
                </table>
            </div>
        </div>       

    </div>
    
     </div>
     </div>
     </div>
     <Toast ref={toast} />
     <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={confirm} reject={ignore} />
    </>
);
};

export default MyOrders;
