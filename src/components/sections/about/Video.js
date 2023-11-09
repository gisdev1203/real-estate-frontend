// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import 'magnific-popup';

// class Video extends Component {
//     componentDidMount() {
//         function popup() {
//             $('.popup-youtube').magnificPopup({
//                 type: 'iframe'
//             });
//         }
//         popup()
//     }
//     render() {
//         return (
//             <div className="section light-bg section-img-wrapper">
//                 <div className="section-imgs">
//                     <img src={process.env.PUBLIC_URL + "/assets/img/megamenu.png"} alt="img" />
//                     <img src={process.env.PUBLIC_URL + "/assets/img/megamenu2.png"} alt="img" />
//                 </div>
//                 <div className="container">
//                     <div className="section-title-wrap text-center">
//                         <h5 className="custom-primary">Our Ways</h5>
//                         <h2 className="title">Watch Our Agents Do Their Jobs</h2>
//                         <p className="subtitle">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         </p>
//                         <Link to="https://www.youtube.com/watch?v=TKnufs85hXk&t=1s" className="btn-custom popup-youtube"> <i className="m-0 fas fa-play" /> </Link>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Video;

////////////////////////////////////////////////    Functional Component    ///////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "magnific-popup";

const Video = () => {
  useEffect(() => {
    function popup() {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
      });
    }
    popup();
  }, []);

  return (
    <div className="section light-bg section-img-wrapper">
      <div className="section-imgs">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/megamenu.png"}
          alt="img"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/img/megamenu2.png"}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="section-title-wrap text-center">
          <h5 className="custom-primary">Our Ways</h5>
          <h2 className="title">Watch Our Agents Do Their Jobs</h2>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <Link
            to="https://www.youtube.com/watch?v=TKnufs85hXk&t=1s"
            className="btn-custom popup-youtube"
          >
            {" "}
            <i className="m-0 fas fa-play" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
