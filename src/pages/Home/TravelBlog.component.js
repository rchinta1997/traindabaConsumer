// import React from "react";

// const TravelBlog = () => {
//   return (
//   <>

// <section className="blog-section pdtb-80">
//   <div className="container">
//     <div className="row mb-4">
//       <div className="col-md-8 offset-md-2 text-center">
//         <h2 className="heading mb-4">Travel Blog</h2>
//         <p className="head">
//           TrainDhaba is a trusted and efficient e-catering partner of IRCTC
//           which aims to deliver your favorite food in 3 easy ways.
//         </p>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-4">
//         <div className="blog-item">
//           <p className="mb-4">
//           <img src={require("../../Assets/Images/blog-1.png")} alt="" />
//           </p>
//           <h4>HYDERABAD</h4>
//           <p className="gray-text">21 MAY 2022</p>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="blog-item">
//           <p className="mb-4">
//           <img src={require("../../Assets/Images/blog-2.png")} alt="" />
//           </p>
//           <h4>Vishakapatnam</h4>
//           <p className="gray-text">22 MAY 2022</p>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="blog-item">
//           <p className="mb-4">
//           <img src={require("../../Assets/Images/blog-3.png")} alt="" />
//           </p>
//           <h4>Ooty</h4>
//           <p className="gray-text">24 MAY 2022</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//   </>
//   );
// };

// export default TravelBlog;

import React from "react";
import Slider from "react-slick";

const TravelBlog = () => {
  const blogItems = [
    {
      title: "HYDERABAD",
      date: "21 MAY 2022",
      image: require("../../Assets/Images/blog-1.png"),
    },
    {
      title: "Vishakapatnam",
      date: "22 MAY 2022",
      image: require("../../Assets/Images/blog-3.png"),
    },
    {
      title: "Ooty",
      date: "24 MAY 2022",
      image: require("../../Assets/Images/blog-2.png"),
    },
  ];

  const settings = {
    // centerMode: true,
    // centerPadding: '60px',
    dots:true,
   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,

        settings: {
          slidesToShow: 3,
          dots: true,

          arrows: false,
        },
      },

      {
        breakpoint: 991,

        settings: {
          slidesToShow: 2,

          dots: true,

          arrows: false,
        },
      },

      {
        breakpoint: 500,

        settings: {
          slidesToShow: 1,

          dots: true,

          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="blog-section pdtb-80" id="blog-section">
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
        <Slider {...settings}>
          {blogItems.map((item, index) => (
            <div key={index} className="blog-item-main-con" >
            <div className="blog-item">
              <p className="mb-4">
                <img src={item.image} alt="" />
              </p>
              <h4>{item.title}</h4>
              <p className="gray-text">{item.date}</p>
            </div>
            </div>
           
          
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TravelBlog;

