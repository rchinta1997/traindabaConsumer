import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function searchByPNR() {
    navigate("/PNRInfo", { state: { search: searchValue } });
  }

  return (
    <div className="ritekhana-banner-one ">
      <div className="ritekhana-banner-one-layer">
        <img
          src={require("../../Assets/Images/Website background image.png")}
          alt=""
        ></img>
        <span className="ritekhana-banner-transparent"></span>
        <div className="ritekhana-banner-caption-view1 col-12">
          <div className="container" id="hero">
            <h1>DISCOVER RESTAURANTS THAT DELIVER AT YOUR SEAT </h1>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" style={{ listStyle: "none" }}>
                <a
                  className={ activeIndex === 0 ? "nav-link text-white text-tabs  active show": "nav-link text-white text-tabs"}
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
                  className={ activeIndex === 1 ? "nav-link text-white text-tabs  active show": "nav-link text-white text-tabs"}
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
                  className={ activeIndex === 2 ? "nav-link text-white text-tabs  active show": "nav-link text-white text-tabs"}
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
              {activeIndex == 0 && (
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
                          name="pnr"
                          id="pnr"
                          placeholder="Enter PNR Number"
                          onChange={(e) => setSearchValue(e.target.value)}
                        ></input>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-8">
                        <input type="submit" onClick={() => searchByPNR()} value="Order Food"></input>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {activeIndex == 1 && (
                <div
                  className="tab-pane fade  show active"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <form method="post" id="train_form">
                    <div className="row">
                      <div className="col-md-4">
                        <input
                          type="text"
                          name="train_no"
                          placeholder="Enter Train Number"
                        ></input>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          name="boarding_date"
                          id="boarding_date"
                          placeholder="Boarding Date"
                        ></input>
                      </div>
                      <div className="col-md-4">
                        <input type="submit" value="Order Food"></input>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {activeIndex == 2 && (
                <div
                  className="tab-pane fade  show active"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <form method="post" id="station_form">
                    <div className="row ">
                      <div className="col-md-8 col-sm-8 col-xs-12">
                        <input
                          type="text"
                          name="station"
                          id="station"
                          placeholder="Enter Station name"
                        ></input>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12">
                        <input type="submit" value="Order Food"></input>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <p className="partner">
              Authorised{" "}
              <img
                className="bg-white"
                src="https://traindhaba.com//assets/images/irctc-logo.png"
                width="20px"
                height="20px"
                alt="IRCTC"
              ></img>{" "}
              IRCTC partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
