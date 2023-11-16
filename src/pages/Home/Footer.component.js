import React, { useEffect, useRef ,useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    // const [scrollToDiv,setScrollToDiv] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
   
    const routeClickHandler = (event, type) => {
        // navigate("/TrackOrder",{ state: { orderId: orderId }});

        if (type === "Call_Back") {
            navigate("/Contact/Call back Request");
        }
        else if (type === "CustomerReviews"){
            navigate('/')

        }
        else if (type === "Cancellation") {
            navigate("/Contact/Cancellation Order Request");  
        }
        else if (type === "Feedback") {
            navigate("/Contact/Feedback");
        }

        else if (type === "Contact") {
            navigate("/Contact/Contact");
        }

        else if (type === "Aboutus"){
            navigate("/Aboutus")

        }
        else if (type === 'TermsAndConditions'){
            navigate("/TermsAndConditions")
        }
        else if (type === "Faq"){
            navigate("/Faq")
        }
        else if (type === "PrivacyPolicy"){
            navigate("/PrivacyPolicy")
        }
        else if (type === "Disclaimer"){
            navigate("/Disclaimer")
        }

        else if (type === "PureVegFood"){
            navigate("/PureVegFood")

        }
        else if (type === "NonVegFood"){
            navigate("/NonVegFood")
            
        }
        else if (type === "Career"){
            navigate("/Career")
        }
        else if (type === "JainFood"){
            navigate("/JainFood")
        }
        else if (type === "HowToOrderFood"){
            navigate("/HowToOrderFood")
        }
        else if (type === "Offers"){
            navigate("/Offers")
        }
        else if (type === "TrackOrder"){
            navigate("/TrackOrder")
        }
        else if (type === "blogSection"){
            navigate("/")
        }
        
        else if (type === "RestaurentSignup"){
            navigate("/RestaurentSignUp/SignUp")
        }
        else if (type === "TourOperatorSignup"){
            navigate("/TourOperatorSignUp/SignUp")
        }


    }
    // const moveBy = (event)=>{
    //     console.log("scroll by 100",100)
    //     // window.scrollBy(0,2270 )
    //     routeClickHandler(event, "CustomerReviews")
        
    //     let ele = document.getElementById("customer-reviews")
    //     setTimeout(()=>{
    //         window.scrollTo({
    //             top: ele,
    //             behavior: "smooth"
    //         });
    //         window.scrollBy(0,-85)
    //     },1000)
       
    //   }
//     useEffect(()=>{
       
//   },[scrollToDiv])

    // useEffect(() => {
    //     const customerReviewsSection = document.getElementById("customer-reviews");
    //     if (customerReviewsSection) {
    //       customerReviewsSection.scrollIntoView({
    //         behavior: "smooth",
    //         inline:'start',
    //         block:'start',
    //       });
    //     }
    //   }, [location.pathname]);


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
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Aboutus")}>About Us</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "HowToOrderFood")}>How To Order Food</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Career")}>Career</a>
                                        </li>
                                        <li>
                                            <a href="#"  onClick={(event) => routeClickHandler(event, "TermsAndConditions")}>Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#"  onClick={(event) => routeClickHandler(event, "PrivacyPolicy")}>Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Disclaimer")}>Disclaimer</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Faq")}>FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 xs-mt-30">
                                    <h5>Help & Support</h5>
                                    <ul>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "TrackOrder")}>Track Order</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Offers")}>Offers</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Call_Back")}>Call back Request</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Cancellation")}>Cancellation Request</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "Feedback")}>Feedback/Complaint</a>
                                        </li>

                                        <li>
                                        <a href="#" onClick={(event) => routeClickHandler(event, "Contact")}>Contact</a>

                                           
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 xs-mt-30">
                                    <h5>Partnerships</h5>
                                    <ul className="mb-3">
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "RestaurentSignup")}>Restaurent Signup</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(event) => routeClickHandler(event, "TourOperatorSignup")}>Tour Operator Signup</a>
                                        </li>
                                    </ul>
                                    <h5>Other Link</h5>
                                    <ul>
                                        <li>
                                        {/* onClick={(event) =>routeClickHandler(event, "CustomerReviews")} */}
                                            <a  href='#customer-reviews'  onClick={(e)=>{routeClickHandler(e, "CustomerReviews")}}>Customer Reviews</a>
                                        </li>
                                        <li>
                                            <a href="#"  onClick={(event) => routeClickHandler(event, "PureVegFood")}>Pure Veg Food</a>
                                        </li>
                                        <li>
                                            <a href="#"  onClick={(event) => routeClickHandler(event, "NonVegFood")}>Non Veg Food</a>
                                        </li>
                                        <li>
                                            <a href="#"  onClick={(event) => routeClickHandler(event, "JainFood")}>Jain Food</a>
                                        </li>
                                        <li>
                                            <a href="#blog-section" onClick={(event) => routeClickHandler(event, "blogSection")}>Train Dhaba Blog</a>
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
                                <p>Email: support@traindhaba.com</p>
                                <p>For partners enquires: info@traindhaba.com</p>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="row copy-rights xs-text-center">
                        <div className="col-md-6">
                            Train Dhaba © 2022, All Right Reserved - by <a href="#">Aagama</a>
                        </div>
                        <div className="col-md-6 social-icons xs-mt-15">
                            <ul className="social-icons">
                                <li>Follow us on:</li>
                                <li>
                                    <a href="https://www.facebook.com/traindhaba" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/traindhaba" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/traindhaba/" target="_blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/train_dhaba/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a>
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