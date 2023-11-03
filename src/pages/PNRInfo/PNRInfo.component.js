import React, { useContext, useEffect, useState,useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SecondBanner from "../SearchBanner/SecondBanner.component";
import dayjs from "../../helpers/dayjs-helpers";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { Toast } from 'primereact/toast';
import styles from './PNRInfo.css';
import cartContext from "../../Context/cart-context";

import { format, parse } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { checkDeliveryDateWithOutletData } from "../../utility/helper"

// const cryptoHelper = require("../../helpers/crypto-helper");
// const cryptoHelperInstance = new cryptoHelper();

const PNRInfo = () => {
  const [pnrData, setPnrData] = useState(undefined);
  const [selectedStationData, setSelectedStationData] = useState({});
  const [outletData, setOutletData] = useState([]);
  const [passengerInfo, setPassengerInfo] = useState({});
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = useContext(cartContext);
  //const [ contextData, setContextData ] = useContext(cartContext);
  const toast = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const convertUtcToIst = (inputDate) => {
    // Parse the input date as UTC
    const parsedDateUtc = parse(inputDate, 'yyyy-MM-dd HH:mm', new Date(), {
      timeZone: 'UTC',
    });

    // Convert UTC time to IST (Indian Standard Time, UTC+5:30)
    const convertedDateIst = utcToZonedTime(parsedDateUtc, 'Asia/Kolkata');

    // Format the converted date in "dd-MM-yyyy HH:mm" format
    const formattedDateIst = format(convertedDateIst, 'dd-MM-yyyy HH:mm', {
      timeZone: 'Asia/Kolkata',
    });

    return formattedDateIst;
  }
  useEffect(() => {

    context.cart = context.cart.filter(function (returnableObjects) {
      return returnableObjects.Item_Name !== 'test834';
    });

    context.cart.reduce((count, curItem) => {
      console.log("=========context.cart.reduce==remove==========")
      console.log(curItem)
      return count + curItem.quantity;
    }, 0)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);

    if (location.state.searchBy === 'PNR') {
      axios
        .get(process.env.REACT_APP_API_URL + `/Irctc/searchByPNR/${location.state.search}`)
        .then((response) => {
          console.log("===============searchByPNR===============")
          console.log(response.data.body)
          if (response.data.success) {
            setLoading(false);
            setIsError(false);
            setPnrData(response.data.body);
            let passengerInfo = {
              pnrNumber: location.state.search,
              user_Id: "",
              name: "",
              email: "",
              mobileNumber: "",
              vendorId: "",
              outletId: "",
              Comment: "",
              pnr: "",
              booking_Date: "",
              delivery_Date: "",
              stationCode: "",
              stationName: "",
              journeyDate: response.data.body.trainInfo.dt,
              coachPosition: response.data.body.seatInfo.coach,
              berthNo: response.data.body.seatInfo.berth,
              noOfSeats: response.data.body.seatInfo.noOfSeats,
              trainNo: response.data.body.trainInfo.trainNo,
              trainName: response.data.body.trainInfo.name
            };
            let userdata = localStorage.getItem("user");
            if (userdata) {
              let user = JSON.parse(userdata);
              passengerInfo.email = user.emailID;
              passengerInfo.mobileNumber = user.mobileNumber;
            }

            setPassengerInfo(passengerInfo);
            localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
            console.log("PassengerInfo", JSON.parse(localStorage.getItem("PassengerInfo")));
          } else {
            setIsError(true);
            setPnrData(undefined);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
    if (location.state.searchBy === 'TRAIN') {
      context?.trainInfo?.stations.forEach(element => {
        let istTime = convertUtcToIst(element.arrival.replace(' UTC', ''));
        element.schArrivalDate = istTime.split(" ")[0];
        element.schArrivalTime = istTime.split(" ")[1];
        element.halt = element.haltMinutes;
      });
      console.log(context);
      if (context?.trainInfo?.stations) {
        let passengerInfo = {
          journeyDate: context?.trainInfo?.travelDate,
          trainNo: context?.trainInfo?.trainNo,
          trainName: context?.trainInfo?.trainName,
          stations: context?.trainInfo?.stations,
          trainInfo: context?.trainInfo
        };
        let pnrData = passengerInfo;
        pnrData.trainInfo.dt = passengerInfo.journeyDate;
        setPnrData(pnrData);
        setPassengerInfo(passengerInfo);
        localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
      }


    }



  }, []);

  const getRestaurantsInfo = (e) => {
    let stationData = pnrData.stations[e.target.value];
    console.log(dayjs().unix());
    setSelectedStationData(stationData);
    console.log(stationData);
    axios
      .get(process.env.REACT_APP_API_URL + `/Outlets/getOutletsByStationCode/${stationData.code}`)
      .then((response) => {
        if (response.data.success) {
          console.log("==========getOutletsByStationCode==============");
          console.log(response);
          passengerInfo["arrival"] = stationData["arrival"];
          passengerInfo["arrDate"] = stationData["arrDate"];
          passengerInfo["halt"] = stationData["halt"];
          passengerInfo["code"] = stationData["code"];
          passengerInfo["stationName"] = stationData["name"];

          setPassengerInfo({ ...passengerInfo });
          localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
          setOutletData(response.data.body);
                  }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const getMenubyRestaurant = (event, eachOutlet) => {
    let scheduledDate = selectedStationData.schArrivalDate + " " + selectedStationData.schArrivalTime;
    let scheduledunixTime = dayjs(scheduledDate).subtract(eachOutlet.Order_Timing, "minute").unix();
    let currentDate = dayjs().unix();
    // if (currentDate < scheduledunixTime) {
    passengerInfo["vendorId"] = eachOutlet["VendorId"];
    passengerInfo["stationId"] = eachOutlet["Station_Id"];
    passengerInfo["outletId"] = eachOutlet["_id"];

    dayjs.extend(customParseFormat);
    const formattedDate = dayjs().format("YYYY-MM-DD hh:mm:ss");
    passengerInfo["booking_Date"] = formattedDate;
    passengerInfo["delivery_Date"] = scheduledDate;
    setPassengerInfo({ ...passengerInfo });
    localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));

      const msg = checkDeliveryDateWithOutletData(scheduledDate, eachOutlet)
      if(msg == "" || msg == undefined)
      {
        navigate("/RestaurantInfo", { state: { MenuData: eachOutlet } });
      }
      else
      {
        toast.current.show({ severity: 'error', summary: 'Error', detail: msg, life: 3000 });
   
      }
      //navigate("/RestaurantInfo", { state: { MenuData: eachOutlet } });
    /*} else {
      passengerInfo["VendorId"] = undefined;
      passengerInfo["StationId"] = undefined;
      passengerInfo["OutletId"] = undefined;
      setPassengerInfo({ ...passengerInfo });
      navigate("/RestaurantInfo", { state: { MenuData: eachOutlet } });
    }*/
  };
  const fetchTrainData = (query) => {
    try {
      const response = axios.get(`/Irctc/searchByTrainNo/${location.state.search}?query=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };



  return (
    <>
       

      <div className="page-title-section">
        <div className="container"><h2>Outlets</h2></div>
      </div>

      <div className="page-main-container">
        <div className="container">

        {loading ? (<div className="loader-container">
          <div className="spinner"></div>
        </div>) : null}


        <div className="row">
          <div className="col-md-12">
            {isError && (
              <div className="jumbotron">
                <p className="text-center lead">PNR info not found. PNR data not found.</p>
              </div>
            )}
            {!isError && pnrData !== undefined && (
              <>
                <div class="outer-container">
                  <table className="table table-bordered table-sm">
                    <tbody>
                      <tr>
                        <td>Journey Date: </td>
                        <td>{pnrData.trainInfo.dt}</td>
                      </tr>
                      <tr>
                        <td>Train :</td>
                        <td>
                          {" "}
                          {pnrData.trainInfo.trainNo} - {pnrData.trainInfo.name}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="card shadow px-3 py-4 my-4">
                    <h4 className="card-title mb-4 text-center">Select your Boarding Station</h4>
                    <div class="card-body stc_body">
                      <select name="boarding_station" className="form-control" onChange={getRestaurantsInfo}>
                        <option>Select Boarding Station</option>
                        {pnrData.stations.map((eachData, index) => {
                          return (
                            <option key={index} value={index}>
                              {eachData.name} {eachData.code} ( Arrival : {eachData.schArrivalDate} ,{" "}
                              {eachData.schArrivalTime}, Halt : {eachData.halt})
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div class="outer-container">
            <div class="row">
              {outletData.length > 0 &&
                outletData.map((eachOutlet) => {
                  return (
                    <>
                    <div class="col-md-6">
                      <div class="vendor-card shadow px-3 py-3">
                        <div class="vendor-logo">
                        {eachOutlet.image ? (
                          <img src={eachOutlet.image} alt="outlets-images" />
                        ) : (
                          <img src={require("../../Assets/Images/outlet-placeholder.PNG")} alt="" />
                        )}
                        </div>
                        <div class="vendor-content">
                          <div class="vendor-name">{eachOutlet.OutletName}</div>
                          <div class="vendor-order">Min Order:{eachOutlet.Min_Order}</div>
                          <div class="card-text mt-2">Delivery Time {eachOutlet.Order_Timing} Min</div>
                          <a href="#" class="order-now-button" onClick={(event) => getMenubyRestaurant(event, eachOutlet)}>Order Now</a>
                        </div>
                      </div>
                      </div>
                    </>
                  )

                })
              }
            </div>
            </div>
          </div>
        </div>      
        </div>
      </div> 
        <Toast ref={toast} />       
        
    </>
  );
};

export default PNRInfo;
