import React from "react";

const OffersComponent = () => {
  return (
    <>
      <div className="page-title-section">
        <div className="container">
          <h2>Offers</h2>
        </div>
      </div>
      <div className="page-main-container">
        <div className="container">
          {/* <p>Coming Soon</p> */}
          <h1>
            Avail <spam className="offer-price">15-20%</spam> off on your first
            15 orders
          </h1>
        </div>
      </div>
    </>
  );
};

export default OffersComponent;
