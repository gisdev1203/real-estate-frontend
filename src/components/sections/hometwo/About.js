// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class About extends Component {
//     render() {
//         return (
//             <div className="section">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 mb-lg-30 acr-dots-wrapper acr-single-img-wrapper">
//                             <img src={process.env.PUBLIC_URL + "/assets/img/listings-list/3.jpg"} alt="img" />
//                             <div className="acr-dots" />
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="section-title-wrap mr-lg-30">
//                                 <h5 className="custom-primary">About Us</h5>
//                                 <h2 className="title">We provide state of the art real estate service</h2>
//                                 <p className="subtitle">
//                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                                 </p>
//                                 <p className="subtitle">
//                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
//                                 </p>
//                                 <Link to="/listing-map" className="btn-custom">Browse Listings</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default About;

////////////////////////////////////////////    Functional Component //////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-30 acr-dots-wrapper acr-single-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/listings-list/3.jpg"}
              alt="img"
            />
            <div className="acr-dots" />
          </div>
          <div className="col-lg-6">
            <div className="section-title-wrap mr-lg-30">
              <h5 className="custom-primary">About Us</h5>
              <h2 className="title">
                We provide state of the art real estate service
              </h2>
              <p className="subtitle">
                Buy Home for Less (BHFL) is a subsidiary of Mstar Capital group,
                established since 2003 in the property development and finance
                business. Our specialty is catering to property that are below
                the market value. We work directly with distressed property and
                NPL, through major banks worldwide, to get our client’s the best
                price. We not only work directly with financial institutions,
                but also with property owners who are in a financial problems
                and need to sell their property fast.
              </p>
              <p className="subtitle">
                Our client will get the best price possible and gain profit when
                they purchase property from our professional real estate agent.
                Our real estate agent are fully trained and professional in the
                real estate field, which will ensure that your real estate
                transaction is smooth and secure.
              </p>
              <p className="subtitle">
                You can be rest assured that when you buy property from us, you
                will get the best price and services, and in a quick turnaround
              </p>
              <Link to="/listing-map" className="btn-custom">
                Browse Listings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
