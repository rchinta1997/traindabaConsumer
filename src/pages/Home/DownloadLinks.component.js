import React from "react";

const DownloadLinks = () => {
    return (
        <section className="hygiene-section pdtb-50">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p className="fs-18 mt-3 red-color uppercase">
          <b>Download the Restaurant app now!</b>
        </p>
        <h3 className="sub-heading uppercase">Hygiene food at your seat</h3>
        <p>
          Not at all like other occupation locales that abandon you out of the
          loop, Job Time alarms you the moment your application is seen.
        </p>
        <div className="mt-4">
          <a href="#">
            <img src={require("../../Assets/Images/google-play.png")} alt="" />
          </a>{" "}
          &nbsp;{" "}
          <a href="#">
            <img src={require("../../Assets/Images/app-store.png")} alt="" />
          </a>
        </div>
      </div>
      <div className="col-md-6 text-right xs-mt-30">
        <img src={require("../../Assets/Images/food-img1.png")} alt="" />
      </div>
    </div>
  </div>
</section>

    );
}

export default DownloadLinks;