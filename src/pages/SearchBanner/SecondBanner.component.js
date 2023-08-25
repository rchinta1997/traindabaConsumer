import React from "react";

const SecondBanner = () =>{
    return (
        <div className="ritekhana-subheader-view1">
        <span className="ritekhana-banner-transparent"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Outlets</h1>
            </div>
            <ul className="ritekhana-breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i> <a href="#">Trains</a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Outlets{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default SecondBanner;
