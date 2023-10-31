import React, { useState } from "react";


const HowToOrder = () => {
    return (
        <>
            <section className="order-food pdtb-80">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-8 offset-md-2 text-center">
                            <h2 className="heading mb-4">How to order food?</h2>
                            <p className="head">
                                TrainDhaba is a trusted and efficient e-catering partner of IRCTC
                                which aims to deliver your favorite food in 3 easy ways.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="order-food-item">
                                <p className="mb-4">
                                <img src={require("../../Assets/Images/icon-1.png")} alt="" />
                                </p>
                                <h4>ENTER</h4>
                                <p>Enter PNR/Train number details and choose your delivery station</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="order-food-item">
                                <p className="mb-4">
                                <img src={require("../../Assets/Images/icon-2.png")} alt="" />
                                </p>
                                <h4>MENU</h4>
                                <p>
                                    Search for your favorite restaurant and order the food of your
                                    choice.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="order-food-item">
                                <p className="mb-4">
                                    <img src={require("../../Assets/Images/icon-3.png")} alt="" />
                                </p>
                                <h4>ORDER</h4>
                                <p>
                                    Search for your favorite restaurant and order the food of your
                                    choice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HowToOrder;
