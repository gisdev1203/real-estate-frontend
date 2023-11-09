import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

const Latestblog = () => {
  const [state, setState] = useState([]);

  const SubmitlistingData = async () => {
    const resposne = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/submitlisting/submit`
    );
    const data = await resposne.json();
    setState(data.result.slice(-2));
  };

  useEffect(() => {
    SubmitlistingData();
  }, []);

  // const navigate = useNavigate();

  const acessChat = () => {};

  return (
    <div className="section section-padding light-bg">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Latest News</h5>
          <h2 className="title">Best Deal of the Month</h2>
        </div>
        <div className="row">
          <div className=" lg:flex justify-center">
            {!state ? (
              <div className="">
                <div className="flex justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Loading.gif`}
                    alt="Loading"
                  />
                </div>
                <p className="text-center my-4 text-xl font-medium ">No Data</p>
              </div>
            ) : (
              state.map((res, key) => {
                const basicInformation = res.BasicInformation;
                const deatils = res.Details;
                const gallery = res.Gallery;
                const author = res.Author;
                // console.log(author);
                // console.log(gallery.picture);
                return (
                  <div
                    className="listing listing-list"
                    style={{ margin: "0.5rem" }}
                    key={key}
                  >
                    <div className="listing-thumbnail" style={{ width: "80%" }}>
                      <Link
                        to={`/listing-details-v1/${res._id}`}
                        // onClick={() => {
                        //   navigate(`/listing-details-v1/${res._id}`);
                        //   window.location.reload(false);
                        // }}
                      >
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${gallery.file}`}
                          alt="listing"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Link>
                      <div className="listing-badges">
                        <span className="listing-badge featured">
                          {" "}
                          <i className="fas fa-star" />{" "}
                        </span>

                        <span className="listing-badge sale">On Sale</span>

                        <span className="listing-badge pending"> Pending</span>

                        <span className="listing-badge rent"> Rental</span>
                      </div>
                      <div className="listing-controls">
                        <Link to="#" className="favorite">
                          <i className="far fa-heart" />
                        </Link>
                        <Link to="#" className="compare">
                          <i className="fas fa-sync-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-body" style={{ width: "70%" }}>
                      <div className="listing-author">
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${author.pic}`}
                          alt="author"
                        />
                        <div className="listing-author-body">
                          <p>
                            {" "}
                            <Link to="#">{author.name}</Link>{" "}
                          </p>
                          <span className="listing-date">
                            {res.createdAt.split("T")[0]}
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
                              <li onClick={() => acessChat(author._id)}>
                                <Link to="/chat">
                                  <i className="fas fa-envelope" /> Send Message
                                </Link>
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
                      <h5 className="listing-title">
                        {" "}
                        <Link
                          to={`/listing-details-v1/${res._id}`}
                          // onClick={() => {
                          //   navigate(`/listing-details-v1/${res._id}`);
                          //   window.location.reload(false);
                          // }}
                          title={basicInformation.name}
                        >
                          {basicInformation.name}
                        </Link>{" "}
                      </h5>
                      <span className="listing-price">
                        {basicInformation.currency}
                        {basicInformation.price}
                        {/* {new Intl.NumberFormat().format(
                          item.monthlyprice.toFixed(2)
                        )} */}
                        {basicInformation.status === "Rental" ? (
                          <span>/{basicInformation.period}</span>
                        ) : (
                          <></>
                        )}
                      </span>
                      <p className="listing-text">
                        {basicInformation.description}
                      </p>
                      <div className="acr-listing-icons">
                        <OverlayTrigger overlay={bedstip}>
                          <div className="acr-listing-icon">
                            <i className="flaticon-bedroom" />
                            <span className="acr-listing-icon-value">
                              {deatils.beds}
                            </span>
                          </div>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={bathstip}>
                          <div className="acr-listing-icon">
                            <i className="flaticon-bathroom" />
                            <span className="acr-listing-icon-value">
                              {deatils.bathrooms}
                            </span>
                          </div>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={areatip}>
                          <div className="acr-listing-icon">
                            <i className="flaticon-ruler" />
                            <span className="acr-listing-icon-value">
                              {basicInformation.space} SQM
                              {/* {new Intl.NumberFormat().format(item.area)} */}
                            </span>
                          </div>
                        </OverlayTrigger>
                      </div>
                      <div className="listing-gallery-wrapper">
                        <Link
                          to={`/listing-details-v1/${res._id}`}
                          // onClick={() => {
                          //   navigate(`/listing-details-v1/${res._id}`);
                          //   window.location.reload(false);
                          // }}
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
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestblog;
