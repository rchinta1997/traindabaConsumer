import React, { useState , useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar.component";
import Banner from "../SearchBanner/Banner.component";
import DownloadLinks from "./DownloadLinks.component";
import Footer from "./Footer.component";
import HowToOrder from "./HowToOrder.component";
import HowToOrderGuide from "./HowToOrderGuide.component";
import RailTools from "./RailTools.component";
import PNRInfo from "../PNRInfo/PNRInfo.component";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation.component";
import Restaurants from "../PNRInfo/Restaurants.component";
import Testimonials from "./Testimonials.component";
import TravelBlog from "./TravelBlog.component";
import VendorRegistration from "./VendorRegistration.component";
import Login from "../Login/Login.component";
import TrackOrder from "../TrackOrder/TrackOrder.component";
import cartContext from "../../Context/cart-context";
import Contact from "../Contact/Contact.component";


const HomePage = () => {
  
  const context = useContext(cartContext);
  console.log("====HomePage======")
  const _token = localStorage.getItem("token");
  console.log("====_token======"+_token)

  useEffect(() => {
    
  }, [context]);
  if(_token)
  {
    return (
      <>
        
        <Banner></Banner>
        <div className="ritekhana-main-content home-page">
         {/* <PNRInfo></PNRInfo>     
        <OrderConfirmation></OrderConfirmation>     
        <Restaurants></Restaurants>   
        <TrackOrder></TrackOrder>     
               */}
          
          <HowToOrder></HowToOrder>         
          <RailTools></RailTools>
          <Testimonials></Testimonials>
          <VendorRegistration></VendorRegistration>
          <DownloadLinks></DownloadLinks>
          <TravelBlog></TravelBlog>
        </div>
        <HowToOrderGuide></HowToOrderGuide>
       
      </>
    );
  }
  else
  {
    return (
      <>
        
         <Banner></Banner> 
        <div className="ritekhana-main-content home-page">
        {/* <PNRInfo></PNRInfo>     
        <OrderConfirmation></OrderConfirmation>     
        <Restaurants></Restaurants>            */}
          <Login></Login>  
          <HowToOrder></HowToOrder>       
          <RailTools></RailTools>
          <Testimonials></Testimonials>
          <VendorRegistration></VendorRegistration>
          <DownloadLinks></DownloadLinks>
          <TravelBlog></TravelBlog>
        </div>
        <HowToOrderGuide></HowToOrderGuide>
       
      </>
    );
  }
 
};

export default HomePage;
