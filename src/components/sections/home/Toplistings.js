import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Slider from "react-slick";

const gallerytip = () => <Tooltip>Gallery</Tooltip>;
const bedstip = () => <Tooltip>Beds</Tooltip>;
const bathstip = () => <Tooltip>Bathrooms</Tooltip>;
const areatip = () => <Tooltip>Square Feet</Tooltip>;

const Toplistings = () => {
  //creating the ref
  const customeSlider = useRef();

  const [listing, setListing] = useState([]);

  const SubmitlistingData = async () => {
    const resposne = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/submitlisting/lastsubmit`
    );
    const data = await resposne.json();
    setListing(data.result);
  };

  useEffect(() => {
    SubmitlistingData();
  }, []);

  const next = () => {
    customeSlider.current.slickNext();
  };
  const previous = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="section light-bg">
      <div className="container top-listings">
        <div className="acr-arrows" style={{ left: "40px" }}>
          <i
            className="slider-prev fas fa-arrow-left slick-arrow"
            onClick={() => previous()}
          />
          <i
            className="slider-next fas fa-arrow-right slick-arrow"
            onClick={() => next()}
          />
        </div>
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Trending</h5>
          <h2 className="title">Our Top Listings</h2>
        </div>
        <Slider
          className="top-listings-slider col-12"
          ref={customeSlider}
          {...settings}
        >
          {/* Top Item Start */}
          {listing.slice(0, 4).map((item, i) => (
            <div key={i}>
              <div
                // className="acr-top-listing-item bg-cover dark-overlay bg-center"
                className="acr-top-listing-item bg-cover"
                style={{
                  backgroundImage:
                    "url(" +
                    process.env.REACT_APP_SERVER_URL +
                    "/" +
                    item.Gallery.file +
                    ")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  // width: "inherit",
                  height: "100% !important",
                }}
              >
                {/* <img
                  className="acr-top-listing-item bg-cover dark-overlay bg-center"
                  src={`${process.env.REACT_APP_SERVER_URL}/${item.Gallery.file}`}
                  style={{ width: "inherit" }}
                /> */}
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-lg-4">
                    <div className="acr-top-listing-body listing">
                      <div className="listing-body">
                        <h5 className="listing-title">
                          {" "}
                          <Link
                            to={`/listing-details-v1/${item._id}`}
                            title={item.BasicInformation.name}
                          >
                            {item.BasicInformation.name}
                          </Link>{" "}
                        </h5>
                        <div className="listing-author">
                          <img
                            src={`${process.env.REACT_APP_SERVER_URL}/${item.Author.pic}`}
                            alt="author"
                          />
                          <div className="listing-author-body">
                            <p>
                              {" "}
                              <Link to="#">{item.Author.name}</Link>{" "}
                            </p>
                            <span className="listing-date">
                              {item.createdAt.split("T")[0]}
                            </span>
                          </div>
                          <Dropdown className="options-dropdown">
                            <Dropdown.Toggle as={NavLink}>
                              <i className="fas fa-ellipsis-v" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-right">
                              <ul>
                                <li>
                                  {" "}
                                  <Link to="tel:+123456789">
                                    {" "}
                                    <i className="fas fa-phone" /> Call Agent
                                  </Link>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <Link to="mailto:+123456789">
                                    {" "}
                                    <i className="fas fa-envelope" /> Send
                                    Message
                                  </Link>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <Link to="/listing-details-v1">
                                    {" "}
                                    <i className="fas fa-bookmark" /> Book Tour
                                  </Link>{" "}
                                </li>
                              </ul>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <span className="listing-price">
                          {item.BasicInformation.currency}
                          {item.BasicInformation.price}
                          {item.BasicInformation.status === "Rental" ? (
                            <span>/{item.BasicInformation.period}</span>
                          ) : (
                            <></>
                          )}{" "}
                        </span>
                        <p className="listing-text">
                          {item.BasicInformation.description}
                        </p>
                        <div className="acr-listing-icons">
                          <OverlayTrigger overlay={bedstip}>
                            <div className="acr-listing-icon">
                              <i className="flaticon-bedroom" />
                              <span className="acr-listing-icon-value">
                                {item.Details.beds}
                              </span>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={bathstip}>
                            <div className="acr-listing-icon">
                              <i className="flaticon-bathroom" />
                              <span className="acr-listing-icon-value">
                                {item.Details.bathrooms}
                              </span>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={areatip}>
                            <div className="acr-listing-icon">
                              <i className="flaticon-ruler" />
                              <span className="acr-listing-icon-value">
                                {item.BasicInformation.space} SQM
                              </span>
                            </div>
                          </OverlayTrigger>
                        </div>
                        <div className="listing-gallery-wrapper">
                          <Link
                            to={`/listing-details-v1/${item._id}`}
                            className="btn-custom btn-sm secondary"
                          >
                            View Details
                          </Link>
                          <OverlayTrigger overlay={gallerytip}>
                            <Link to="#" className="listing-gallery">
                              {" "}
                              <i className="fas fa-camera" />{" "}
                            </Link>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Top Item End */}
        </Slider>
      </div>
    </div>
  );
};

export default Toplistings;
