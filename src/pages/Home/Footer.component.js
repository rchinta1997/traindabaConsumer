import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const routeClickHandler = (event, type) => {
       // navigate("/TrackOrder",{ state: { orderId: orderId }});
    
        if (type === "Call_Back") {
            navigate("/Contact/Call back Request");
        }
        else if (type === "Cancellation") {
            navigate("/Contact/Cancellation Order Request");
        }
        else if (type === "Feedback") {
            navigate("/Contact/Feedback");
        }
       


    }


    return (
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Company</h5>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">How it Works?</a>
                                    </li>
                                    <li>
                                        <a href="#">Career</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Desclaimer</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 xs-mt-30">
                                <h5>Help & Support</h5>
                                <ul>
                                    <li>
                                        <a href="#">Track Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Offers</a>
                                    </li>
                                    <li>
                                        <a href="#">Call back Request</a>
                                    </li>
                                    <li>
                                        <a href="#">Cancellation Request</a>
                                    </li>
                                    <li>
                                        <a href="#">Feedback/Complaint</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 xs-mt-30">
                                <h5>Partnerships</h5>
                                <ul>
                                    <li>
                                        <a href="#">Restaurent Signup</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Operator Signup</a>
                                    </li>
                                </ul>
                                <h5 className="mt-3">Other Link</h5>
                                <ul>
                                    <li>
                                        <a href="#">Customer Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#">Pure Veg Food</a>
                                    </li>
                                    <li>
                                        <a href="#">Non Veg Food</a>
                                    </li>
                                    <li>
                                        <a href="#">Train Dhaba Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 xs-mt-30">
                        <div className="contact-address">
                            <h5>Contact Us</h5>
                            <p>North East Ave Building, Second Floor #2 Plot 470 & 471, Rd Number 26A, Ayyappa Society, Madhapur, Telangana 500081</p>

                            <p>Phone: 040- 40077374</p>
                            <p>Email:support@traindhaba.com</p>
                            <p>For partners enquires: info@traindha.com</p>
                        </div>
                    </div>
                </div>

                <hr></hr>
              
                    <div className="row copy-rights xs-text-center">
                        <div className="col-md-6">
                            Train Dhaba © 2022, All Right Reserved - by <a href="#">Aagama</a>
                        </div>
                        <div className="col-md-6 text-end xs-text-center xs-mt-15">
                            <ul className="social-icons">
                                <li>Follow us on:</li>
                                <li>
                                    <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </footer>
    </>
    )
}

export default Footer;