// import React, { Component } from 'react';

// const counter = [
//     {
//         icon: "garage",
//         value: 24934,
//         title: "Listings"
//     },
//     {
//         icon: "sales-agent",
//         value: 65317,
//         title: "Agents"
//     },
//     {
//         icon: "company",
//         value: 4658,
//         title: "Agencies"
//     },
//     {
//         icon: "sold",
//         value: 67335,
//         title: "Listings Sold"
//     }
// ]

// class Counter extends Component {
//     render() {
//         return (
//             <div className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/3.jpg)" }}>
//                 <div className="container">
//                     <div className="row">
//                         {counter.map((item, i) => (
//                             <div key={i} className="col-lg-3 col-md-6 col-sm-6">
//                                 <div className="acr-infographic-item">
//                                     <i className={"flaticon-" + item.icon + ""} />
//                                     <h4>{new Intl.NumberFormat().format((item.value))}</h4>
//                                     <p>{item.title}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Counter;

///////////////////////////////////////////////            Functional Componenet   //////////////////////////////////////////////////////////////

import React, { Component } from "react";

const counter = [
  {
    icon: "garage",
    value: 24934,
    title: "Listings",
  },
  {
    icon: "sales-agent",
    value: 65317,
    title: "Agents",
  },
  {
    icon: "company",
    value: 4658,
    title: "Agencies",
  },
  {
    icon: "sold",
    value: 67335,
    title: "Listings Sold",
  },
];

const Counter = () => {
  return (
    <div
      className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2"
      style={{
        backgroundImage:
          "url(" + process.env.PUBLIC_URL + "/assets/img/banner/3.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          {counter.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
              <div className="acr-infographic-item">
                <i className={"flaticon-" + item.icon + ""} />
                <h4>{new Intl.NumberFormat().format(item.value)}</h4>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
