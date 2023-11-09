// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Breadcrumb extends Component {
//     render() {
//         return (
//             <div className="subheader bg-cover bg-center dark-overlay" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/subheader.jpg )" }}>
//                 <div className="container">
//                     <div className="subheader-inner">
//                         <h1 className="text-white">{this.props.breadcrumb.pagename}</h1>
//                         <nav aria-label="breadcrumb">
//                             <ol className="breadcrumb">
//                                 <li className="breadcrumb-item"><Link to="/"> <i className="fas fa-home" /> </Link></li>
//                                 <li className="breadcrumb-item active" aria-current="page">{this.props.breadcrumb.pagename}</li>
//                             </ol>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Breadcrumb;

////////////////////////////////////////////////////    Functional Component ///////////////////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <div
      className="subheader bg-cover bg-center dark-overlay"
      style={{
        backgroundImage:
          "url(" + process.env.PUBLIC_URL + "/assets/img/subheader.jpg )",
      }}
    >
      <div className="container">
        <div className="subheader-inner">
          <h1 className="text-white">{props.breadcrumb.pagename}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  {" "}
                  <i className="fas fa-home" />{" "}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.breadcrumb.pagename}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
