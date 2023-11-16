import React, { useEffect, useRef } from "react";

const Testimonials = () => {
  const customerReviewRef = useRef(null);

  useEffect(() => {
      // Check if the ref exists and scroll to it
      if (customerReviewRef.current) {
        console.log("ref-ele", customerReviewRef.current.offsetTop)
        let ele = document.getElementById("customer-reviews")
      
            window.scrollTo({
                top: ele,
                behavior: "smooth"
            });
            window.scrollBy(0,-85)
      
      }
  },[customerReviewRef]);
  return (
    <>
    <section className="testimonial-section pdtb-70" id="customer-reviews" ref={customerReviewRef}>
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <h2 className="heading light-yellow uppercase text-center mb-4">
          Testimonials
        </h2>
        <div className="testimonial-item">
          <div className="testimonial-title">It was very delicious</div>
          <p>
            {" "}
            What's amazing about Train Dhaba is its delivery. I don't need to
            worry about my grandparents while they are traveling alone. I can
            order food for them right from my place and it is delivered right to
            their seat. They can enjoy the food on their journey.
          </p>
          <p>Really LOVE IT !!!</p>
          <div className="testi-user">
          <img src={require("../../Assets/Images/avatar.png")} alt="" />
            <strong>Nani</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
    // <div className="ritekhana-main-section ritekhana-testimonial-view1-full">
    //   <span className="ritekhana-transparent-white"></span>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <div className="ritekhana-fancy-title white-color">
    //           <h2 className="ritekhana-color">Testimonials</h2>
    //         </div>
    //         <div className="ritekhana-testimonial-view1">
    //           <div className="ritekhana-testimonial-view1-layer">
    //             <div className="ritekhana-testimonial-view1-inner">
    //               <p>It was very deliciousss</p>
    //               <span>
    //                 {" "}
    //                 What's amazing about Train Dhaba is its delivery. I don't
    //                 need to worry about my grandparents while they are traveling
    //                 alone. I can order food for them right from my place and it
    //                 is delivered right to their seat. They can enjoy the food on
    //                 their journey. Really LOVE IT !!!
    //               </span>
    //               <figure>
    //                 <img
    //                   src="https://traindhaba.com/admin/uploads/6214e73417f74.jpg"
    //                   alt=""
    //                 ></img>
    //                 <figcaption>
    //                   <h2>Nani</h2>
    //                 </figcaption>
    //               </figure>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Testimonials;
