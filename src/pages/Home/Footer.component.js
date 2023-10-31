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
        <footer id="ritekhana-footer" className="ritekhana-footer-one">
        <div className="ritekhana-footer-widget">
            <div className="container">
                <div className="row">
                    <aside className="widget col-md-3 widget_links">
                        <div className="ritekhana-footer-title"><h3>Company</h3></div>
                        <ul>
                            <li><a href="https://traindhaba.com/about">About Us</a></li>
                            <li><a href="#">How it Works?</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="https://traindhaba.com/terms">Terms  Conditions</a></li>
                            <li><a href="https://traindhaba.com/privacy">Privacy Policy</a></li>
                            <li><a href="#">Desclaimer</a></li>
                            <li><a href="https://traindhaba.com/faq">FAQs</a></li>
                        </ul>
                    </aside>
                    <aside className="widget col-md-3 widget_links">
                        <div className="ritekhana-footer-title"><h3>Help  Support</h3></div>
                        <ul>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#" >Offers</a></li>
                            <li><a href="#" onClick={(event) => routeClickHandler(event, "Call_Back")}>Call back Request</a></li>
                            <li><a href="#" onClick={(event) => routeClickHandler(event, "Cancellation")}>Cancellation Request</a></li>
                            <li><a href="#" onClick={(event) => routeClickHandler(event, "Feedback")}>Feedback/Complaint</a></li>
                            <li><a href="https://traindhaba.com/contact">Contact</a></li>
                        </ul>
                    </aside>
                    <aside className="widget col-md-3 widget_links">
                        <div className="ritekhana-footer-title"><h3>Partnerships</h3></div>
                        <ul>
                            <li><a href="#">Restaurent Signup</a></li>
                            <li><a href="#">Tour Operator Signup</a></li>
                        </ul>
                        <div className="ritekhana-footer-title"><h3>Other Link</h3></div>
                        <ul>
                            <li><a href="#">Customer Reviews</a></li>
                            <li><a href="#">Pure Veg Food</a></li>
                            <li><a href="#">Non Veg Food</a></li>
                            <li><a href="#">Train Dhaba Blog</a></li>
                        </ul>
                    </aside>
                    <aside className="widget col-md-3 widget_links">
                        <div className="ritekhana-footer-title"><h3>Contact Us</h3></div>
                            <p style={{"color": "#999"}}>North East Ave Building,<br></br> Second Floor #2 Plot 470, 471, <br></br>Rd Number 26A, Ayyappa Society,<br></br> Madhapur, Telangana 500081 <br></br>
                            <strong className="ritekhana-color">Phone:</strong> 040- 40077374 <br></br>
                            <strong className="ritekhana-color">Email:</strong>  support@traindhaba.com <br></br>
                            <strong className="ritekhana-color">For partners enquires:</strong> info@traindha.com  <br></br>
                        </p>
                        {/* <!-- <div className="social-links">
                          <a target="_blank" href="#" className="p-2 fab fa-twitter text-white"></a>
                          <a target="_blank" href="#" className=" fab fa-facebook-f text-white"></a>
                          <a target="_blank" href="#" className="p-2 fab fa-instagram text-white "></a>
                          <a target="_blank" href="#" className="fab fa-linkedin-in text-white"></a>
                          <a target="_blank" href="#" className="p-2 fab fa-youtube text-white"></a>
                        </div> --> */}
                    </aside>
                    
                </div>
            </div>
        </div>
       
        <div className="ritekhana-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Train Dhaba © 2022, All Right Reserved - by <a href="https://donakt.com/">Donakt Tech</a></p>
                        <ul className="ritekhana-footer-social">
                            <li>Follow us on:</li>
                            <li><a href="#" className="fab fa-facebook-f"></a></li>
                            <li><a href="#" className="fab fa-twitter"></a></li>
                            <li><a href="#" className="fab fa-linkedin-in"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="#" className="ritekhana-back-top"><i className="fa fa-arrow-up"></i></a>
        </div>
    </footer>
    )
}

export default Footer;