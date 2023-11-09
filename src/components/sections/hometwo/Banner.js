import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import listing from "../../../data/listings";

const Banner = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots d-flex",
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="banner banner-4 bg-cover bg-center">
      <div className="container">
        <div className="banner-item">
          <div className="banner-inner">
            <div className="banner-text">
              <div className="acr-dots-wrapper">
                <div className="acr-dots" />
              </div>
              <h1 className="title">Find Your Ideal Home Today</h1>
              <p className="subtitle">
                Thousands of people have their flats up for grabs. Don't miss
                your chance to grab your own house today.
              </p>
            </div>
            <div className="banner-newsletter">
              <form method="post">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  name="email-newsletter"
                />
                <button
                  type="submit"
                  className="btn-custom secondary"
                  name="button"
                >
                  Subscribe
                </button>
              </form>
              <span>
                *We will be sending you two emails per month about offers and
                exclusive listings
              </span>
            </div>
            {/* Featured Listings Start */}
            <Slider
              className="acr-featured-listings banner-featured-slider"
              {...settings}
            >
              {listing.slice(0, 4).map((item, i) => (
                <div key={i} className="col-12">
                  <div className="acr-featured-listing">
                    <div className="featured-listing-thumb">
                      <Link to="/listing-details-v1">
                        <img
                          src={process.env.PUBLIC_URL + "/" + item.gridimg}
                          alt="listing"
                        />
                      </Link>
                      <div className="featured-listing-controls">
                        {item.star === true ? <span>Featured</span> : ""}
                        <Link to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="featured-listing-content">
                      <h6>
                        {new Intl.NumberFormat().format(
                          item.monthlyprice.toFixed(2)
                        )}
                        $/mo
                      </h6>
                      <div className="featured-listing-meta">
                        <p>
                          Beds {item.beds}, Baths {item.bathrooms},{" "}
                          {new Intl.NumberFormat().format(item.area)} Sqft
                        </p>
                      </div>
                      <span>
                        <i className="fas fa-map-marker-alt" /> {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            {/* Featured Listings End */}
          </div>
        </div>
      </div>
      <div
        className="banner-bg bg-center bg-cover"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/assets/img/banner/4.jpg )",
        }}
      />
    </div>
  );
};

export default Banner;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import listing from '../../../data/listings.json';

// class Banner extends Component {
//     render() {
//         const settings = {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             arrows: false,
//             dots: true,
//             dotsClass: "slick-dots d-flex",
//             autoplay: true,
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         }
//         return (
//             <div className="banner banner-4 bg-cover bg-center">
//                 <div className="container">
//                     <div className="banner-item">
//                         <div className="banner-inner">
//                             <div className="banner-text">
//                                 <div className="acr-dots-wrapper">
//                                     <div className="acr-dots" />
//                                 </div>
//                                 <h1 className="title">Find Your Ideal Home Today</h1>
//                                 <p className="subtitle">Thousands of people have their flats up for grabs. Don't miss your chance to grab your own house today.</p>
//                             </div>
//                             <div className="banner-newsletter">
//                                 <form method="post">
//                                     <input type="text" placeholder="Email Address" className="form-control" name="email-newsletter" />
//                                     <button type="submit" className="btn-custom secondary" name="button">Subscribe</button>
//                                 </form>
//                                 <span>*We will be sending you two emails per month about offers and exclusive listings</span>
//                             </div>
//                             {/* Featured Listings Start */}
//                             <Slider className="acr-featured-listings banner-featured-slider" {...settings}>
//                                 {listing.slice(0, 4).map((item, i) => (
//                                     <div key={i} className="col-12">
//                                         <div className="acr-featured-listing">
//                                             <div className="featured-listing-thumb">
//                                                 <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="listing" /></Link>
//                                                 <div className="featured-listing-controls">
//                                                     {item.star === true ? <span>Featured</span> : ''}
//                                                     <Link to="#"><i className="far fa-heart" /></Link>
//                                                 </div>
//                                             </div>
//                                             <div className="featured-listing-content">
//                                                 <h6>{new Intl.NumberFormat().format((item.monthlyprice).toFixed(2))}$/mo</h6>
//                                                 <div className="featured-listing-meta">
//                                                     <p>Beds {item.beds}, Baths {item.bathrooms}, {new Intl.NumberFormat().format((item.area))} Sqft</p>
//                                                 </div>
//                                                 <span><i className="fas fa-map-marker-alt" /> {item.title}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                             {/* Featured Listings End */}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="banner-bg bg-center bg-cover" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/4.jpg )" }} />
//             </div>
//         );
//     }
// }

// export default Banner;
