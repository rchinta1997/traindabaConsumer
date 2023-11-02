import React from "react";

const TravelBlog = () => {
  return (
  <>

<section className="blog-section pdtb-80">
  <div className="container">
    <div className="row mb-4">
      <div className="col-md-8 offset-md-2 text-center">
        <h2 className="heading mb-4">Travel Blog</h2>
        <p className="head">
          TrainDhaba is a trusted and efficient e-catering partner of IRCTC
          which aims to deliver your favorite food in 3 easy ways.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="blog-item">
          <p className="mb-4">
          <img src={require("../../Assets/Images/blog-1.png")} alt="" />
          </p>
          <h4>HYDERABAD</h4>
          <p className="gray-text">21 MAY 2022</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-item">
          <p className="mb-4">
          <img src={require("../../Assets/Images/blog-2.png")} alt="" />
          </p>
          <h4>Vishakapatnam</h4>
          <p className="gray-text">22 MAY 2022</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-item">
          <p className="mb-4">
          <img src={require("../../Assets/Images/blog-3.png")} alt="" />
          </p>
          <h4>Ooty</h4>
          <p className="gray-text">24 MAY 2022</p>
        </div>
      </div>
    </div>
  </div>
</section>


  </>
  );
};

export default TravelBlog;
