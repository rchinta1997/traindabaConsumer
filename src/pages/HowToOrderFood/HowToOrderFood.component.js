
import React, { useState } from 'react'

const HowToOrderFoodComponent = () => {
    return (
        <>
            <div className="page-title-section">
                <div className="container"><h2>How To Order Food</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Ordering with Train Dhaba is very easy. If you have a valid PNR, it's enough to get the food to your seat directly.
                                Just login to www.traindhaba.com or install our app. Please enter the PNR in the Enter your PNR field. Once your
                                PNR is validated, we will fetch the required information and display the list of stations. Please select the station
                                where you want to order the food, under the station please select the outlet and add your favorite menu into the
                                cart. Goto cart and checkout with your payment. It's done. You will get the food to your seat.</p>
                            <ol>
                                <li>Enter your PNR</li>
                                <li>Select the station</li>
                                <li>Select the outlet under station</li>
                                <li>Add your favorite menu in the cart</li>
                                <li>Checkout with payment</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}




export default HowToOrderFoodComponent
