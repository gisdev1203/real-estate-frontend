import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

const Recentlistings = () => {
  const [data, setData] = useState([]);

  const SubmitlistingData = async () => {
    const resposne = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/submitlisting/lastsubmit`
    );
    const data = await resposne.json();
    setData(data.result);
  };

  useEffect(() => {
    SubmitlistingData();
  }, []);
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Find Your Home</h5>
          <h2 className="title">Recent Listings</h2>
        </div>
        <div className="row">
          <div className="col-lg-8">
            {data.slice(0, 1).map((item, i) => (
              <div key={i} className="listing listing-list">
                <div className="listing-thumbnail">
                  <Link to={`/listing-details-v1/${item._id}`}>
                    <img
                      src={`${process.env.REACT_APP_SERVER_URL}/${item.Gallery.file}`}
                      alt="listing"
                    />
                  </Link>
                  <div className="listing-badges">
                    {item.star === true ? (
                      <span className="listing-badge featured">
                        {" "}
                        <i className="fas fa-star" />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                    {item.sale === true ? (
                      <span className="listing-badge sale">On Sale</span>
                    ) : (
                      ""
                    )}
                    {item.pending === true ? (
                      <span className="listing-badge pending"> Pending</span>
                    ) : (
                      ""
                    )}
                    {item.rental === true ? (
                      <span className="listing-badge rent"> Rental</span>
                    ) : (
                      ""
                    )}
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
                <div className="listing-body">
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
                              <i className="fas fa-envelope" /> Send Message
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
                  <h5 className="listing-title">
                    {" "}
                    <Link
                      to={`/listing-details-v1/${item._id}`}
                      title={item.BasicInformation.name}
                    >
                      {item.BasicInformation.name}
                    </Link>{" "}
                  </h5>
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
                        {/* {`${process.env.REACT_APP_SERVER_URL}/${item.Gallery.picture}`} */}
                        <i className="fas fa-camera" />{" "}
                      </Link>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            ))}
            {data.slice(1, 2).map((item, i) => (
              <div key={i} className="listing">
                <div className="listing-thumbnail">
                  <Link to={`/listing-details-v1/${item._id}`}>
                    <img
                      src={`${process.env.REACT_APP_SERVER_URL}/${item.Gallery.file}`}
                      alt="listing"
                    />
                  </Link>
                  <div className="listing-badges">
                    {item.star === true ? (
                      <span className="listing-badge featured">
                        {" "}
                        <i className="fas fa-star" />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                    {item.sale === true ? (
                      <span className="listing-badge sale">On Sale</span>
                    ) : (
                      ""
                    )}
                    {item.pending === true ? (
                      <span className="listing-badge pending"> Pending</span>
                    ) : (
                      ""
                    )}
                    {item.rental === true ? (
                      <span className="listing-badge rent"> Rental</span>
                    ) : (
                      ""
                    )}
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
                <div className="listing-body">
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
                              <i className="fas fa-envelope" /> Send Message
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
                  <h5 className="listing-title">
                    {" "}
                    <Link
                      to={`/listing-details-v1/${item._id}`}
                      title={item.BasicInformation.name}
                    >
                      {item.BasicInformation.name}
                    </Link>{" "}
                  </h5>
                  <span className="listing-price">
                    {item.BasicInformation.currency}
                    {/* {new Intl.NumberFormat().format(
                      item.BasicInformation.price.toFixed(2)
                    )} */}
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
            ))}
          </div>
          <div className="col-lg-4">
            {data.slice(2, 4).map((item, i) => (
              <div key={i} className="listing">
                <div className="listing-thumbnail">
                  <Link to={`/listing-details-v1/${item._id}`}>
                    <img
                      src={`${process.env.REACT_APP_SERVER_URL}/${item.Gallery.file}`}
                      alt="listing"
                    />
                  </Link>
                  <div className="listing-badges">
                    {item.star === true ? (
                      <span className="listing-badge featured">
                        {" "}
                        <i className="fas fa-star" />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                    {item.sale === true ? (
                      <span className="listing-badge sale">On Sale</span>
                    ) : (
                      ""
                    )}
                    {item.pending === true ? (
                      <span className="listing-badge pending"> Pending</span>
                    ) : (
                      ""
                    )}
                    {item.rental === true ? (
                      <span className="listing-badge rent"> Rental</span>
                    ) : (
                      ""
                    )}
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
                <div className="listing-body">
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
                              <i className="fas fa-envelope" /> Send Message
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
                  <h5 className="listing-title">
                    {" "}
                    <Link
                      to={`/listing-details-v1/${item._id}`}
                      title={item.BasicInformation.name}
                    >
                      {item.BasicInformation.name}
                    </Link>{" "}
                  </h5>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentlistings;
