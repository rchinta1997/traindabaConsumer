import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import dayjs from "../../helpers/dayjs-helpers";
import ConfirmationModal from "../../utility/confirmationmodal.component"
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { convertDateTimeToIST, convertDateToIST, convertIsoToIst } from '../../utility/helper'

import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import styles from './MyOrders.css';
import { async } from "q";
import LoadingSpinner from "../LoadingSpinner/spinner";


const MyOrders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [MyOrders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Processing');
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedOrderSatusId, setSelectedOrderSatusId] = useState(null);
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const [isLoading, setIsLoading] = useState(false)

  const confirm = () => {
    confirmCancelOrder(selectedOrderId, selectedOrderSatusId);
  }

  const ignore = () => {
    setVisible(true);
  }

  const cancelOrder = (orderId, orderStatusId) => {
    setSelectedOrderId(orderId);
    setSelectedOrderSatusId(orderStatusId);
    setVisible(true);
  };





  const confirmCancelOrder = async (orderId, orderStatusId) => {

    let _user = JSON.parse(localStorage.getItem("user"));
    let req = {
      Order_Id: orderId,
      Order_Status_Id: orderStatusId
    };

    console.log(orderId)

    axios
      .post(process.env.REACT_APP_API_URL + `/order/updateOrderStatus`, req)
      .then((response) => {
        console.log("===============response received===============")
        console.log(response + "cancel order Details")

        if (response) {
          //   const updatedOrders = response.map((order) =>
          //       order.orderId === selectedOrderId ? { ...order, status: 'Cancelled' } : order
          // );
          // setOrders(updatedOrders);
          // setVisible(false);
          const updatedOrders = response.map((order) => {
            if (order.orderId === selectedOrderId) {
              return { ...order, status: 'Cancelled' };
            } else {
              return order;
            }
          });

          setOrders(updatedOrders);
          setVisible(false)



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

    let _user = JSON.parse(localStorage.getItem("user"));
    let userid = {
      User_Id: _user.id
    };
    setIsLoading(true)
    axios
      .post(process.env.REACT_APP_API_URL + `/order/getUserOrders/`, userid)
      .then((response) => {
        console.log("===============my orders===============")
        console.log(response.data.body)
        setIsLoading(false)
        if (response.data.success) {
          //setIsError(false);
          //setPnrData(response.data.body);
          response.data.body.forEach((element) => {
            element.Delivery_Date = convertIsoToIst(element.Delivery_Date);
            element.Booking_Date = convertIsoToIst(element.Booking_Date);
          });
          setOrders(response.data.body);
          console.log("=============== ordersmy===============" + response.data.body)
          console.log(MyOrders);


          let passengerInfo = {
            pnrNumber: location.state.search,
            journeyDate: response.data.body.trainInfo.dt,
            coachPosition: response.data.body.seatInfo.coach,
            berthNo: response.data.body.seatInfo.berth,
            noOfSeats: response.data.body.seatInfo.noOfSeats,
            trainNo: response.data.body.trainInfo.trainNo,
            trainName: response.data.body.trainInfo.name
          };
          //setPassengerInfo(passengerInfo);
          localStorage.setItem("MyOrders", JSON.stringify(response.data.body));
          // setIsLoading(false)
        } else {
          //setIsError(true);
          //setPnrData(undefined);
        }


      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

  }, []);

  const renderOrderDetails = (
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
          console.log(element.Total_Amount.$numberDecimal);
          return (

            <tbody>
              <tr>
                <td>{element.Booking_Date}</td>
                <td>{element.Order_Id}</td>
                <td>{element?.Total_Amount?.$numberDecimal}</td>
                <td>ORDER ACCEPTED</td>
                <td>
                  {element.Order_Id != null &&
                    <button className="btn btn-danger" onClick={() => cancelOrder(element.Order_Id, element.Order_Status_Id)} >Cancel</button>
                  }
                </td>
              </tr>
            </tbody>
          );


        })}

      </table>
    </div>

  )



  return (
    <>
      <div className="ritekhana-main-content home-page">
        <div className="ritekhana-main-section ritekhana-services-view1-full" >
          <div style={{ height: '400px', overflow: 'auto' }}>
            <div className="ritekhana-column-9 ritekhana-right-padd ritekhana-left-padd">
              <div className="ritekhana-dashboard-box">
                <div className="ritekhana-fancy-title">
                  <h2 className="ritekhana-color">My Orders</h2>
                </div>
                {isLoading ? <LoadingSpinner /> : renderOrderDetails}
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
