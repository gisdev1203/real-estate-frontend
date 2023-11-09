import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "../../../data/category";

const Categories = () => {
  return (
    <div className="section pt-0">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Categories</h5>
          <h2 className="title">Browse By Category</h2>
        </div>
        <div className="row">
          {Data.type.slice(0, 8).map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <Link to="#" className="acr-category category-2">
                <i className={"flaticon-" + item.icon + ""} />
                <div className="acr-category-body">
                  <h5> {item.title} </h5>
                  <span>{item.numberofitem} Listings</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { type } from '../../../data/category.json'

// class Categories extends Component {
//     render() {
//         return (
//             <div className="section pt-0">
//                 <div className="container">
//                     <div className="section-title-wrap section-header">
//                         <h5 className="custom-primary">Categories</h5>
//                         <h2 className="title">Browse By Category</h2>
//                     </div>
//                     <div className="row">
//                         {type.slice(0, 8).map((item, i) => (
//                             <div key={i} className="col-lg-4 col-md-6">
//                                 <Link to="#" className="acr-category category-2">
//                                     <i className={"flaticon-" + item.icon + ""} />
//                                     <div className="acr-category-body">
//                                         <h5> {item.title} </h5>
//                                         <span>{item.numberofitem} Listings</span>
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Categories;
