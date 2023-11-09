// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import 'magnific-popup';

// class Gallery extends Component {
//     componentDidMount() {
//         function popup() {
//             $('.gallery-thumb').magnificPopup({
//                 type: 'image',
//                 gallery: {
//                     enabled: true
//                 },
//             });
//         }
//         popup()
//     }
//     render() {
//         return (
//             <div className="section section-padding">
//                 <div className="container">
//                     <div className="section-title-wrap section-header">
//                         <h5 className="custom-primary">Our Office</h5>
//                         <h2 className="title">What You're Working With</h2>
//                     </div>
//                     <div className="row gallery">
//                         <div className="col-lg-6">
//                             <Link to="assets/img/services/1.jpg" className="gallery-thumb">
//                                 <img src={process.env.PUBLIC_URL + "/assets/img/services/1.jpg"} alt="services" />
//                                 <p className="gallery-caption">Our Team</p>
//                             </Link>
//                         </div>
//                         <div className="col-lg-6">
//                             <Link to="assets/img/services/2.jpg" className="gallery-thumb">
//                                 <img src={process.env.PUBLIC_URL + "/assets/img/services/2.jpg"} alt="services" />
//                                 <p className="gallery-caption">The Meeting Room</p>
//                             </Link>
//                             <Link to="assets/img/services/3.jpg" className="gallery-thumb">
//                                 <img src={process.env.PUBLIC_URL + "/assets/img/services/3.jpg"} alt="services" />
//                                 <p className="gallery-caption">The Office</p>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Gallery;

////////////////////////////////////////////////////////  Functional    Components ///////////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "magnific-popup";

const Gallery = () => {
  useEffect(() => {
    function popup() {
      $(".gallery-thumb").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }
    popup();
  }, []);

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Our Office</h5>
          <h2 className="title">What You're Working With</h2>
        </div>
        <div className="row gallery">
          <div className="col-lg-6">
            <Link to="assets/img/services/1.jpg" className="gallery-thumb">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/services/1.jpg"}
                alt="services"
              />
              <p className="gallery-caption">Our Team</p>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="assets/img/services/2.jpg" className="gallery-thumb">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/services/2.jpg"}
                alt="services"
              />
              <p className="gallery-caption">The Meeting Room</p>
            </Link>
            <Link to="assets/img/services/3.jpg" className="gallery-thumb">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/services/3.jpg"}
                alt="services"
              />
              <p className="gallery-caption">The Office</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
