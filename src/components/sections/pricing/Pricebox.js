// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// const tipone = (
//     <Tooltip>
//         Allowed Listings Per Month
//     </Tooltip>
// );
// const tiptwo = (
//     <Tooltip>
//         Monthly Agent Reports
//     </Tooltip>
// );
// class Pricebox extends Component {
//     render() {
//         return (
//             <div className="section section-padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <div className="acr-pricing">
//                                 <div className="acr-pricing-header">
//                                     <h4>Free</h4>
//                                     <p>Package Includes</p>
//                                 </div>
//                                 <div className="acr-pricing-body">
//                                     <div className="acr-pricing-feature">
//                                         <h6>Listing Submission:
//                                             <OverlayTrigger overlay={tipone}>
//                                                 <i className="fas fa-question-circle" />
//                                             </OverlayTrigger>
//                                         </h6>
//                                         <span>Up to 2 Listings</span>
//                                     </div>
//                                     <div className="acr-pricing-feature">
//                                         <h6>Agent Consultation: <OverlayTrigger overlay={tiptwo}>
//                                             <i className="fas fa-question-circle" />
//                                         </OverlayTrigger></h6>
//                                         <span>Not Available</span>
//                                     </div>
//                                 </div>
//                                 <div className="acr-pricing-footer">
//                                     <Link to="/contact" className="btn-custom-2 grey">Get Package</Link>
//                                     <h4 className="custom-primary">0.00$ <span>/mo</span> </h4>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4">
//                             <div className="acr-pricing hot-plan">
//                                 <div className="acr-pricing-header">
//                                     <h4>Basic</h4>
//                                     <p>Package Includes</p>
//                                 </div>
//                                 <div className="acr-pricing-body">
//                                     <div className="acr-pricing-feature">
//                                         <h6>Listing Submission:
//                                             <OverlayTrigger overlay={tipone}>
//                                                 <i className="fas fa-question-circle" />
//                                             </OverlayTrigger>
//                                         </h6>
//                                         <span>Up to 5 Listings</span>
//                                     </div>
//                                     <div className="acr-pricing-feature">
//                                         <h6>Agent Consultation: <OverlayTrigger overlay={tiptwo}>
//                                             <i className="fas fa-question-circle" />
//                                         </OverlayTrigger></h6>
//                                         <span>Not Available</span>
//                                     </div>
//                                 </div>
//                                 <div className="acr-pricing-footer">
//                                     <Link to="/contact" className="btn-custom-2 light">Get Package</Link>
//                                     <h4>12.99$ <span>/mo</span></h4>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4">
//                             <div className="acr-pricing">
//                                 <div className="acr-pricing-header">
//                                     <h4>Commercial</h4>
//                                     <p>Package Includes</p>
//                                 </div>
//                                 <div className="acr-pricing-body">
//                                     <div className="acr-pricing-feature">
//                                         <h6>Listing Submission:
//                                             <OverlayTrigger overlay={tipone}>
//                                                 <i className="fas fa-question-circle" />
//                                             </OverlayTrigger>
//                                         </h6>
//                                         <span>Up to 20 Listings</span>
//                                     </div>
//                                     <div className="acr-pricing-feature">
//                                         <h6>Agent Consultation: <OverlayTrigger overlay={tiptwo}>
//                                             <i className="fas fa-question-circle" />
//                                         </OverlayTrigger></h6>
//                                         <span>Monthly Consultation</span>
//                                     </div>
//                                 </div>
//                                 <div className="acr-pricing-footer">
//                                     <Link to="/contact" className="btn-custom-2 grey">Get Package</Link>
//                                     <h4 className="custom-primary">39.99$ <span>/mo</span></h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Pricebox;

////////////////////////////////////////////////////   Functional Componets   ///////////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const tipone = <Tooltip>Allowed Listings Per Month</Tooltip>;
const tiptwo = <Tooltip>Monthly Agent Reports</Tooltip>;
const Pricebox = () => {
  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="acr-pricing">
              <div className="acr-pricing-header">
                <h4>Free</h4>
                <p>Package Includes</p>
              </div>
              <div className="acr-pricing-body">
                <div className="acr-pricing-feature">
                  <h6>
                    Listing Submission:
                    <OverlayTrigger overlay={tipone}>
                      <i className="fas fa-question-circle" />
                    </OverlayTrigger>
                  </h6>
                  <span>Up to 2 Listings</span>
                </div>
                <div className="acr-pricing-feature">
                  <h6>
                    Agent Consultation:{" "}
                    <OverlayTrigger overlay={tiptwo}>
                      <i className="fas fa-question-circle" />
                    </OverlayTrigger>
                  </h6>
                  <span>Not Available</span>
                </div>
              </div>
              <div className="acr-pricing-footer">
                <Link to="/contact" className="btn-custom-2 grey">
                  Get Package
                </Link>
                <h4 className="custom-primary">
                  0.00$ <span>/mo</span>{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="acr-pricing hot-plan">
              <div className="acr-pricing-header">
                <h4>Basic</h4>
                <p>Package Includes</p>
              </div>
              <div className="acr-pricing-body">
                <div className="acr-pricing-feature">
                  <h6>
                    Listing Submission:
                    <OverlayTrigger overlay={tipone}>
                      <i className="fas fa-question-circle" />
                    </OverlayTrigger>
                  </h6>
                  <span>Up to 5 Listings</span>
                </div>
                <div className="acr-pricing-feature">
                  <h6>
                    Agent Consultation:{" "}
                    <OverlayTrigger overlay={tiptwo}>
                      <i className="fas fa-question-circle" />
                    </OverlayTrigger>
                  </h6>
                  <span>Not Available</span>
                </div>
              </div>
              <div className="acr-pricing-footer">
                <Link to="/contact" className="btn-custom-2 light">
                  Get Package
                </Link>
                <h4>
                  12.99$ <span>/mo</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="acr-pricing">
              <div className="acr-pricing-header">
                <h4>Commercial</h4>
                <p>Package Includes</p>
              </div>
              <div className="acr-pricing-body">
                <div className="acr-pricing-feature">
                  <h6>
                    Listing Submission:
                    <OverlayTrigger overlay={tipone}>
                      <i className="fas fa-question-circle" />
                    </OverlayTrigger>
                  </h6>
                  <span>Up to 20 Listings</span>
                </div>
                <div className="acr-pricing-feature">
                  <h6>
                    Agent Consultation:{" "}
                    <OverlayTrigger overlay={tiptwo}>
                      <i className="fas fa-question-circle" />
                    </OverlayTrigger>
                  </h6>
                  <span>Monthly Consultation</span>
                </div>
              </div>
              <div className="acr-pricing-footer">
                <Link to="/contact" className="btn-custom-2 grey">
                  Get Package
                </Link>
                <h4 className="custom-primary">
                  39.99$ <span>/mo</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricebox;
