// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Info extends Component {
//     render() {
//         return (
//             <div className="section">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 mb-lg-30 acr-dots-wrapper acr-single-img-wrapper">
//                             <img src={process.env.PUBLIC_URL + "/assets/img/listings-list/4.jpg"} alt="img" />
//                             <div className="acr-dots" />
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="section-title-wrap mr-lg-30">
//                                 <h5 className="custom-primary">Get Started</h5>
//                                 <h2 className="title">Our agents are ready to help find your home</h2>
//                                 <p className="subtitle">
//                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//                                 <ul className="acr-list">
//                                     <li>Lorem Ipsum is simply dummy text</li>
//                                     <li>Many desktop publishing packages and web page editors</li>
//                                     <li>There are many variations of passages of Lorem Ipsum</li>
//                                     <li>Internet tend to repeat predefined chunks as necessary</li>
//                                     <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
//                                 </ul>
//                                 <Link to="/listing-map" className="btn-custom">Get Started</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Info;

//////////////////////////////////////////////////////  Functional Component /////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-30 acr-dots-wrapper acr-single-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/listings-list/4.jpg"}
              alt="img"
            />
            <div className="acr-dots" />
          </div>
          <div className="col-lg-6">
            <div className="section-title-wrap mr-lg-30">
              <h5 className="custom-primary">Get Started</h5>
              <h2 className="title">
                Our agents are ready to help find your home
              </h2>
              <p className="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
              <ul className="acr-list">
                <li>Lorem Ipsum is simply dummy text</li>
                <li>Many desktop publishing packages and web page editors</li>
                <li>There are many variations of passages of Lorem Ipsum</li>
                <li>Internet tend to repeat predefined chunks as necessary</li>
                <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
              </ul>
              <Link to="/listing-map" className="btn-custom">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
