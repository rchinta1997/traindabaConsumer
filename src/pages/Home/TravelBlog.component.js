import React from "react";

const TravelBlog = () => {
  return (
    <section id="testimonial_area" className="text">
      <div className="container">
        <div className="row">
          <div className="ritekhana-fancy-title white-color">
            <h2 className="ritekhana-color">Travel Blog</h2>
          </div>
          <div className="col-md-12" style={{marginTop:"-50px"}}>
            <div className="testmonial_slider_area text-center owl-carousel">
              <div className="box-area ">
                <div className="travelimg-area">
                  <img
                    src="https://traindhaba.com/assets/extra-images/travelblog.png"
                    alt=""
                  ></img>
                </div>
                <h5>HYDERABAD</h5>
                <span>21 MAY 2022</span>
              </div>

              <div className="box-area">
                <div className="travelimg-area">
                  <img
                    src="https://traindhaba.com/assets/extra-images/travelblog1.png"
                    alt=""
                  ></img>
                </div>
                <h5>Vishakapatnam</h5>
                <span>23 MAY 2022</span>
              </div>

              <div className="box-area">
                <div className="travelimg-area">
                  <img
                    src="https://traindhaba.com/assets/extra-images/travelblog2.png"
                    alt=""
                  ></img>
                </div>
                <h5>Ooty</h5>
                <span>25 MAY 2022</span>
              </div>
            </div>
          </div>

          <div className="ritekhana-fancy-title white-color">
            <h4 className="ritekhana-color">
              Share your Experience with Train Dhaba
            </h4>
            <div className="ritekhana-services ritekhana-services-view1">
              <div className="col-12 row travel-links">
                <div className="col-3"></div>
                <div className="col-6 travel-links-inner">
                  <ul className="col-12 row  d-flex">
                    <li className="col-3">
                      <a
                        target="_blank"
                        href="#"
                        className="fab fa-twitter"
                      ></a>
                    </li>
                    <li className="col-3">
                      <a
                        target="_blank"
                        href="#"
                        className="fab fa-facebook-f facebook"
                      ></a>
                    </li>
                    <li className="col-3">
                      <a
                        target="_blank"
                        href="#"
                        className="fab fa-instagram"
                      ></a>
                    </li>
                    <li className="col-3">
                      <a
                        target="_blank"
                        href="#"
                        className="fab fa-youtube"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBlog;
