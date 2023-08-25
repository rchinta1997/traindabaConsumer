import React, { useState } from "react";


const HowToOrder = () => {
  return (
    <>
    <div className="ritekhana-main-section ritekhana-services-view1-full">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="ritekhana-fancy-title">
                        <h2 className="ritekhana-color">How to order food?</h2>
                        <span>TrainDhaba is a trusted and efficient e-catering partner of IRCTC which aims to deliver your favorite food in 3 easy ways.</span>
                    </div>
                    <div className="ritekhana-services ritekhana-services-view1">
                        <ul className="col-12 row">
                            <li className="col-4">
                                <i className="fa fa-solid fa-train ritekhana-color"></i>
                                <h2 ><a href="#">ENTER</a></h2>
                                <p className="d-none d-md-block">Enter PNR/Train number details and choose your delivery station</p>
                                <p className="d-md-none" style={{fontSize: "12px"}}>Enter PNR/Train number details and choose your delivery station</p>
                            </li>
                            <li className="col-4">
                                <i className="fa fa-hamburger ritekhana-color"></i>
                                <h2><a href="#">MENU</a></h2>
                                <p className="d-none d-md-block">Search for your favorite restaurant and order the food of your choice.</p>
                                <p className="d-md-none" style={{fontSize: "12px"}}>Search for your favorite restaurant and order the food of your choice.</p>

                            </li>
                            <li className="col-4">
                                <i className="far fa-money-bill-alt ritekhana-color"></i>
                                <h2><a href="#">ORDER</a></h2>
                                <p className="d-none d-md-block">Search for your favorite restaurant and order the food of your choice.</p>
                                <p className="d-md-none" style={{fontSize: "12px"}}>Search for your favorite restaurant and order the food of your choice.</p>
                            </li>
                            {/* <li className="col-3">
                                <i className="fa fa-truck-moving ritekhana-color"></i>
                                <h2><a href="#">ENJOY DELIVARY</a></h2>
                                <p>Get food on your seat</p>
                            </li> */}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  );
};

export default HowToOrder;
