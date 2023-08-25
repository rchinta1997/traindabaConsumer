import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.component";
import Banner from "../SearchBanner/Banner.component";
import DownloadLinks from "./DownloadLinks.component";
import Footer from "./Footer.component";
import HowToOrder from "./HowToOrder.component";
import HowToOrderGuide from "./HowToOrderGuide.component";
import RailTools from "./RailTools.component";
import Testimonials from "./Testimonials.component";
import TravelBlog from "./TravelBlog.component";
import VendorRegistration from "./VendorRegistration.component";
const HomePage = () => {
  return (
    <>
      
      <Banner></Banner>
      <div className="ritekhana-main-content home-page">
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
};

export default HomePage;
