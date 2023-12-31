import React from "react";
import { useNavigate } from "react-router-dom";

const VendorRegistration = () => {
  const navigate = useNavigate();

  const navigateToRestSignUp= () =>{
    navigate("/RestaurentSignUp/SignUp")

  }
    return(
        <>
        <section className="guide-section linear-gradiant pdtb-50">
  <div className="container">
    <div className="row">
      <div className="col-md-8 xs-text-center">
        <h3 className="sub-heading light-yellow uppercase">
          Are You A Restaurant Owner?
        </h3>
        <p className="fs-18 mt-3 text-white">
          Take your business online with TrainDhaba, an IRCTC approved
          e-caterers &amp; become an authorized vendor of IRCTC to deliver food
          on train. And grow your business widely.
        </p>
      </div>
      <div className="col-md-4 xs-btn-center">
        {/* <a href="https://traindhaba.com/contact" target="_blank" className="btn btn-primary btn-lg mt-5 xs-mt-15">
          Sign Up?
        </a> */}
        <p onClick={navigateToRestSignUp} className="btn btn-primary btn-lg mt-5 xs-mt-15">
          Sign Up?
        </p>
      </div>
    </div>
  </div>
</section>

        </>
    //     <div className="ritekhana-main-section bg-back" >
    //     <div className="container mt-5 mb-5">
    //         <div className="row col-12">
    //             <div className="col-md-8 col-6">
    //                 <h1 className="text-white"><b>Are You A Restaurant Owner?</b></h1>
    //                 <p className="text-white">Take your business online with TrainDhaba, an IRCTC approved e-caterers & become an authorized vendor of IRCTC to deliver food on train. And grow your business widely.</p>
    //             </div>
    //             <div className="col-md-4 col-6 text-center">
    //                 <a href="https://traindhaba.com/contact" className="btn btn-outline-light btn-lg mt-2 ml-5">
    //                     <b>Sign Up Now</b>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
}

export default VendorRegistration;