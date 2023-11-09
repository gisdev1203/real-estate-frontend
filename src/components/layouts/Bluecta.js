// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Bluecta extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="cta cta-1">
//                     <div className="row align-items-center">
//                         <div className="col-lg-4">
//                             <h3>Need More Information On Real Estate?</h3>
//                         </div>
//                         <div className="offset-lg-1 col-lg-7">
//                             <p>
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley of type and scrambled.
//                             </p>
//                             <Link to="/contact" className="btn-custom-2 light">Find Out More</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Bluecta;

/////////////////////////////////////////////////   Functional Component  /////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";

const Bluecta = () => {
  return (
    <div className="container">
      <div className="cta cta-1">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h3>Need More Information On Real Estate?</h3>
          </div>
          <div className="offset-lg-1 col-lg-7">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </p>
            <Link to="/contact" className="btn-custom-2 light">
              Find Out More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bluecta;
