import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import dayjs from "../../helpers/dayjs-helpers";
import ConfirmationModal from "../../utility/confirmationmodal.component"
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import {convertDateTimeToIST,convertDateToIST,convertIsoToIst,convertLocalDate} from '../../utility/helper'

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
  const navigate = useNavigate();

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
  setOrders([]);
   let cancelOrder = {
    order_Id: orderId,
    order_Status_Id:'6355de60ac2a790da5f8a791'
   }
    axios
        .post(process.env.REACT_APP_API_URL + `/order/updateOrderStatus/`,cancelOrder)
        .then((response) => {
          console.log("===============response received===============")
          getUserOrder();
        })
        .catch((error) => {
            console.error("Error occurred while cancelling order !", error);
            setVisible(false);
            getUserOrder();
           // toast.current.show({ severity: 'error', summary: 'Failed', detail: 'Error occurred while cancelling order', life: 3000 });
        });
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Order Cancelled Successfully', life: 3000 });
        //setOrders([]);
        console.log("===========setOrders========")
        
        
      };

  const closeConfirmationModal = () => {
    setSelectedOrderId(null);
    setVisible(false);
  };

  const handleTrackOrder = (orderId) => {
       navigate("/TrackOrder",{ state: { orderId: orderId }});
  };


  const location = useLocation();

  useEffect(() => {
    getUserOrder();
}, []);

function getUserOrder()
{
  setOrders([]);
  console.log("====getUserOrder====")
  let _user = JSON.parse(localStorage.getItem("user"));
  let userid ={
      User_Id:_user.id
  } ;
  
  axios
      .post(process.env.REACT_APP_API_URL + `/order/getUserOrders/`,userid)
      .then((response) => {
        console.log("===============my orders===============")
        console.log(response.data.body)
          if (response.data.success) {
              //setIsError(false);
              //setPnrData(response.data.body);
              response.data.body.forEach((element)=>{                    
                   element.Delivery_Date = convertIsoToIst(element.Delivery_Date);  
                   element.Booking_Date = convertLocalDate(element.Booking_Date);
                   element.Order_Status_Id.OrderStatus = element.Order_Status_Id.OrderStatus.replace("ORDER_","");
              });
              setOrders(response.data.body);
              console.log("=============== ordersmy==============="+response.data.body)
              console.log(MyOrders);
              
          } else {
              //setIsError(true);
              //setPnrData(undefined);
          }
      })
      .catch((error) => {
          console.error("There was an error!", error);
      });
}

  
  return (
    <>
        
        <div className="page-title-section">
        <div className="container"><h2>My Orders</h2></div>
        </div>
        <div className="page-main-container">
            <div className="container">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Booking Date</th>                          
                            <th>Order ID</th>
                            <th>Order Price</th>
                            <th>Payment Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    
                    {MyOrders && MyOrders.length>0? MyOrders.map((element) => {
                        console.log("==========Foreach==========");
                        console.log( element.Total_Amount.$numberDecimal );
                        return(

                            <tbody>
                                 <tr>
                                    <td>{element.Booking_Date}</td>                                 
                                    <td><a href="#" className="ritekhana-color" onClick={()=>handleTrackOrder(element.Order_Id)}>{element.Order_Id}</a></td>
                                    <td>Rs. {element?.Total_Amount?.$numberDecimal}/-</td>
                                    <td>{element.Payment_Mode}</td>
                                    <td>{element.Order_Status_Id.OrderStatus}</td>
                                    <td>
                                      {element.Order_Id != null && element.Order_Status_Id._id=='6355de1eac2a790da5f8a78e' &&
                                       <button className="btn btn-danger btn-sm" onClick={()=>cancelOrder(element._id)}  disabled={element.Order_Status_Id._id=='6355de60ac2a790da5f8a791'}>Cancel</button> 
                                      } &nbsp;
                                     
                                    </td>
                                </tr>
                            </tbody>
                        );
                        
                        
                        }):null}
                                                        
                </table>
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
