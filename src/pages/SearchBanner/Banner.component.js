import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AutocompleteComponent from "../../utility/autocomplete.component";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import cartContext from "../../Context/cart-context";
import dayjs from "dayjs";


const Banner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState([new Date(), new Date()]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const context = useContext(cartContext);
  const [boardingDate, setBoardingDate] = useState(new Date());
  const [trainInfo, setTrainInfo] = useState({});
  const [type, setType] = useState("trainno");

  const selectedData = (trainInfo) => {
    context.trainInfo = trainInfo;
  }
  const today = new Date();
  const handleDateChange = (val) => {
    if (val[0] !== null && val[1] === null) {
      setBoardingDate((current) => new Date(current.getFullYear() + 1, 1));
    }
    setValue(val);
    context.trainInfo.travelDate = dayjs(boardingDate).format('DD-MM-YYYY');
    console.log(context);
  };
  function searchByPNR() {
    navigate("/PNRInfo", { state: { searchBy: "PNR", search: searchValue } });
  }
  function searchByTrainNo() {
    navigate("/PNRInfo", { state: { searchBy: "TRAIN", search: context.trainInfo.trainNo + ":" + context.trainInfo.travelDate } });
  }


  useEffect(() => {
    console.log("in banner component");
    console.log(context);
  }, [context]);

  return (

    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-6 header-title">
            <div>
              DISCOVER RESTAURANTS THAT DELIVER AT YOUR SEAT
            </div>
          </div>
        </div>
        <div class="home-seach-container">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" style={{ listStyle: "none" }}>
              <a
                className={activeIndex === 0 ? "nav-link text-white text-tabs  active show" : "nav-link text-white text-tabs"}
                id="pills-home-tab"
                data-toggle="pill"
                href="javascript:void(0)"
                onClick={() => setActiveIndex(0)}
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Order by PNR
              </a>
            </li>
            <li className="nav-item" style={{ listStyle: "none" }}>
              <a
                className={activeIndex === 1 ? "nav-link text-white text-tabs  active show" : "nav-link text-white text-tabs"}
                id="pills-profile-tab"
                data-toggle="pill"
                href="javascript:void(0)"
                onClick={() => setActiveIndex(1)}
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Order by Train No
              </a>
            </li>
            <li className="nav-item" style={{ listStyle: "none" }}>
              <a
                className={activeIndex === 2 ? "nav-link text-white text-tabs  active show" : "nav-link text-white text-tabs"}
                id="pills-contact-tab"
                data-toggle="pill"
                href="javascript:void(0)"
                onClick={() => setActiveIndex(2)}
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Search by Station
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {activeIndex === 0 && (
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <form>
                  <div className="row">
                    <div className="col-md-8 col-sm-8 col-xs-12">
                      <input
                        type="text"
                        className="form-control"
                        name="pnr"
                        id="pnr"
                        placeholder="Enter PNR Number"
                        onChange={(e) => setSearchValue(e.target.value)}
                      ></input>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-8">
                      <input type="submit" className="btn btn-primary btn-block" onClick={() => searchByPNR()} value="Order Food"></input>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {activeIndex === 1 && (
              <div
                className="tab-pane fade  show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <form method="post" id="train_form">
                  <div className="row">
                    <div className="col-md-5 mb-1">
                      <AutocompleteComponent type={type} onData={selectedData} className="col-md-4" />
                    </div>
                    <div className="col-md-3 boarding-date">
                    <input
                        type="text"
                        className="form-control"
                        name="pnr"
                        id="pnr"
                        placeholder="Enter PNR Number"
                        onChange={(e) => setSearchValue(e.target.value)}
                      ></input>

                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          placeholder="Boarding Date"
                          value={boardingDate}
                          minDate={today}
                          onChange={handleDateChange}
                          renderInput={(params) => <input {...params} />}
                        />
                      </LocalizationProvider> */}

                    </div> 

{/* <div className="col-md-8 col-sm-8 col-xs-12">
                      <input
                        type="text"
                        className="form-control"
                        name="pnr"
                        id="pnr"
                        placeholder="Enter PNR Number"
                        onChange={(e) => setSearchValue(e.target.value)}
                      ></input>
                    </div> */}

                    <div className="col-md-4">
                      <input type="submit" className="btn btn-primary btn-block" onClick={() => searchByPNR()} value="Order Food"></input>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {activeIndex === 2 && (
              <div
                className="tab-pane fade  show active"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <form method="post" id="station_form">
                  <div className="row ">
                    <div className="col-md-5 col-sm-8 col-xs-12 mb-1">
                      <input
                        type="text"
                        className="form-control"
                        name="station"
                        id="station"
                        placeholder="Enter Station name"
                      ></input>
                    </div>
                    <div className="col-md-3 col-sm-8 col-xs-12">
                      <input
                        type="text"
                        className="form-control"
                        name="pnr"
                        id="pnr"
                        placeholder="Enter PNR Number"
                        onChange={(e) => setSearchValue(e.target.value)}
                      ></input>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <input type="submit" className="btn btn-primary btn-block" value="Order Food"onClick={() => searchByPNR()}></input>
                    </div>
                  </div>
                </form>
              </div>

            )}
          </div>
        </div>

        <p className="partner text-center">
          Authorised{" "}
          <img
            className="bg-white"
            src={require("../../Assets/Images/irctc.png")}
            alt="IRCTC"
          ></img>{" "}
          IRCTC partner
        </p>
      </div>
    </header>
    // <div className="ritekhana-banner-one ">


    //   <div className="ritekhana-banner-one-layer">
    //     <img
    //       src={require("../../Assets/Images/Website background image.png")}
    //       alt=""
    //     ></img>
    //     <span className="ritekhana-banner-transparent"></span>
    //     <div className="ritekhana-banner-caption-view1 col-12">
    //       <div className="container" id="hero">
    //         <h1>DISCOVER RESTAURANTS THAT DELIVER AT YOUR SEAT </h1>
    //         <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    //           <li className="nav-item" style={{ listStyle: "none" }}>
    //             <a
    //               className={ activeIndex === 0 ? "nav-link text-white text-tabs  active show": "nav-link text-white text-tabs"}
    //               id="pills-home-tab"
    //               data-toggle="pill"
    //               href="javascript:void(0)"
    //               onClick={() => setActiveIndex(0)}
    //               role="tab"
    //               aria-controls="pills-home"
    //               aria-selected="true"
    //             >
    //               Order by PNR
    //             </a>
    //           </li>
    //           <li className="nav-item" style={{ listStyle: "none" }}>
    //             <a
    //               className={ activeIndex === 1 ? "nav-link text-white text-tabs  active show": "nav-link text-white text-tabs"}
    //               id="pills-profile-tab"
    //               data-toggle="pill"
    //               href="javascript:void(0)"
    //               onClick={() => setActiveIndex(1)}
    //               role="tab"
    //               aria-controls="pills-profile"
    //               aria-selected="false"
    //             >
    //               Order by Train No
    //             </a>
    //           </li>
    //           <li className="nav-item" style={{ listStyle: "none" }}>
    //             <a
    //               className={ activeIndex === 2 ? "nav-link text-white text-tabs  active show": "nav-link text-white text-tabs"}
    //               id="pills-contact-tab"
    //               data-toggle="pill"
    //               href="javascript:void(0)"
    //               onClick={() => setActiveIndex(2)}
    //               role="tab"
    //               aria-controls="pills-contact"
    //               aria-selected="false"
    //             >
    //               Search by Station
    //             </a>
    //           </li>
    //         </ul>
    //         <div className="tab-content" id="pills-tabContent">
    //           {activeIndex === 0 && (
    //             <div
    //               className="tab-pane fade show active"
    //               id="pills-home"
    //               role="tabpanel"
    //               aria-labelledby="pills-home-tab"
    //             >
    //               <form>
    //                 <div className="row">
    //                   <div className="col-md-8 col-sm-8 col-xs-12">
    //                     <input
    //                       type="text"
    //                       name="pnr"
    //                       id="pnr"
    //                       placeholder="Enter PNR Number"
    //                       onChange={(e) => setSearchValue(e.target.value)}
    //                     ></input>
    //                   </div>
    //                   <div className="col-md-4 col-sm-4 col-xs-8">
    //                     <input type="submit" onClick={() => searchByPNR()} value="Order Food"></input>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           )}
    //           {activeIndex === 1 && (
    //             <div
    //               className="tab-pane fade  show active"
    //               id="pills-profile"
    //               role="tabpanel"
    //               aria-labelledby="pills-profile-tab"
    //             >
    //               <form method="post" id="train_form">
    //                 <div className="row">
    //                   <div className="col-md-4">
    //                     <AutocompleteComponent type={type} onData={selectedData} className="col-md-4" />
    //                   </div>
    //                   <div className="col-md-4 boarding-date">

    //                          <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                           <DatePicker
    //                             placeholder="Boarding Date"
    //                             value={boardingDate}
    //                             minDate={today} 
    //                             onChange={handleDateChange}
    //                             renderInput={(params) => <input {...params} />}
    //                           />
    //                           </LocalizationProvider>

    //                   </div>

    //                   <div className="col-md-4">
    //                     <input type="submit" onClick={() => searchByTrainNo()} value="Order Food"></input>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           )}
    //           {activeIndex === 2 && (
    //             <div
    //               className="tab-pane fade  show active"
    //               id="pills-contact"
    //               role="tabpanel"
    //               aria-labelledby="pills-contact-tab"
    //             >
    //               <form method="post" id="station_form">
    //                 <div className="row ">
    //                   <div className="col-md-8 col-sm-8 col-xs-12">
    //                     <input
    //                       type="text"
    //                       name="station"
    //                       id="station"
    //                       placeholder="Enter Station name"
    //                     ></input>
    //                   </div>
    //                   <div className="col-md-4 col-sm-4 col-xs-12">
    //                     <input type="submit" value="Order Food"></input>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>

    //           )}
    //         </div>
    //         <p className="partner">
    //           Authorised{" "}
    //           <img
    //             className="bg-white"
    //             src="https://traindhaba.com/assets/images/irctc-logo.png"
    //             width="20px"
    //             height="20px"
    //             alt="IRCTC"
    //           ></img>{" "}
    //           IRCTC partner
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Banner;
