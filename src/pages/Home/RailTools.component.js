import React, { useState } from "react";
const RailTools = () => {
  return (
    <div className="ritekhana-main-section mb-5" id="rail_tools_area">
      <div className="container">
        <div className="col-12 col-md-12">
          <div className="ritekhana-services ritekhana-services-view1">
            <div className="row text-center">
              <div className="col-3">
                <a href="">
                  <i className="fas fa-ticket-alt text-info"></i>
                  <p>PNR Status</p>
                </a>
              </div>
              <div className="col-3">
                <a href="">
                  <i className="fas fa-subway text-warning"></i>
                  <p>Train Running</p>
                </a>
              </div>
              <div className="col-3">
                <a href="">
                  <i className="far fa-calendar-alt text-primary"></i>
                  <p>Train Schedule</p>
                </a>
              </div>
              <div className="col-3">
                <a href="">
                  <i className="fas fa-exchange-alt text-secondary"></i>
                  <p>Live Station</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailTools;
