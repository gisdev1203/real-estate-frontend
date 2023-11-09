import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import "./Banner.css";

const Banner = () => {
  const params = useParams();
  const custome = useRef();

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/submitlisting/submit/${params.id}`
      )
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [params.id]);

  const next = () => {
    custome.current.slickNext();
  };
  const previous = () => {
    custome.current.slickPrev();
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
  };

  return (
    <div
      className="banner banner-2 slider-no-padding"
      style={{ padding: "2%" }}
    >
      <div className="banner-item">
        {data.Gallery && data.Gallery.picture.length > 0 ? (
          <Slider
            className="banner-slider"
            ref={custome}
            {...settings}
            style={{ margin: "0px 20px" }}
          >
            {data.Gallery.picture.map((item, i) => (
              <div key={i}>
                <div
                  className="banner-inner bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(" +
                      process.env.REACT_APP_SERVER_URL +
                      "/" +
                      item +
                      ")",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            ))}
          </Slider>
        ) : (
          <></>
        )}
        {data.BasicInformation ? (
          <div className="acr-listing-details">
            <div className="acr-listing-section">
              <div className="acr-listing-nav">
                <Link to="#" className="btn-custom secondary">
                  Print Listing
                </Link>
              </div>
              <div className="acr-listing-section-body">
                <div className="acr-listing-section-price">
                  <h5>
                    <span>{data.Details.id}</span>
                  </h5>
                  <span>{data.BasicInformation.status}</span>
                  <h3>
                    {data.BasicInformation.currency}
                    {data.BasicInformation.price}
                  </h3>
                  <span>Est. Mortgage</span>
                  <p>
                    {" "}
                    <span className="listing-price">
                      {}
                      {data.BasicInformation.currency}
                      {data.BasicInformation.price}
                      {data.BasicInformation.status === "Rental" ? (
                        <span>/{data.BasicInformation.period}</span>
                      ) : (
                        <></>
                      )}{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="acr-listing-section">
              <div className="acr-listing-section-body">
                <h4>{data.BasicInformation.type}</h4>
                <div className="acr-listing-icons">
                  <div className="acr-listing-icon">
                    <i className="flaticon-bedroom" />
                    <span>Beds</span>
                    <span className="acr-listing-icon-value">
                      {data.Details.beds}
                    </span>
                  </div>
                  <div className="acr-listing-icon">
                    <i className="flaticon-bathroom" />
                    <span>Baths</span>
                    <span className="acr-listing-icon-value">
                      {data.Details.bathrooms}
                    </span>
                  </div>
                  <div className="acr-listing-icon">
                    <i className="flaticon-ruler" />
                    <span>Sqft</span>
                    <span className="acr-listing-icon-value">
                      {data.BasicInformation.space}
                    </span>
                  </div>
                </div>
                <p>{data.BasicInformation.description}</p>
              </div>
            </div>
            <div className="acr-listing-section">
              <div className="acr-listing-controls">
                <Link to="#" className="acr-listing-control">
                  <i className="flaticon-share" />
                </Link>
                <Link to="#" className="acr-listing-control">
                  <i className="flaticon-star" />
                </Link>
                <Link to="#" className="acr-schedule-tour acr-listing-control">
                  <i className="flaticon-event" />
                  <span>Schedule Link tour</span>
                </Link>
              </div>
              <div className="acr-listing-section-body">
                <div className="acr-listing-meta">
                  <div className="row">
                    <div className="col-lg-6 col-md-3 col-sm-3">
                      <div className="acr-listing-meta-item">
                        <span>Type</span>
                        <p>{data.BasicInformation.type}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-3 col-sm-3">
                      <div className="acr-listing-meta-item">
                        <span>View</span>
                        <p>{data.Details.view}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-3 col-sm-3">
                      <div className="acr-listing-meta-item">
                        <span>Lot Size</span>
                        <p>{data.Details.lotsize}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-3 col-sm-3">
                      <div className="acr-listing-meta-item">
                        <span>Condition</span>
                        <p>{data.Details.condition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <span>{error}</span>
        )}
      </div>

      <div className="acr-arrows">
        <i
          className="slider-prev fas fa-arrow-left slick-arrow"
          onClick={() => previous()}
        />
        <i
          className="slider-next fas fa-arrow-right slick-arrow"
          onClick={() => next()}
        />
      </div>
    </div>
  );
};

export default Banner;
