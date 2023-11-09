import React, { Component } from "react";
import { Link } from "react-router-dom";
import listing from "../../../data/listings";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;
class Content extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar sticky-sidebar user-nav sidebar-left">
                <ul>
                  <li>
                    {" "}
                    <Link to="/profile"> Edit Profile</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="active" to="/profile-listings">
                      My Listings
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/profile-saved-listings">
                      Saved Listings
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="logout" to="/">
                      <i className="flaticon-shut-down-button" /> Logout
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              {/* Listing Start */}
              {listing.slice(0, 4).map((item, i) => (
                <div key={i} className="listing listing-list">
                  <div className="listing-thumbnail">
                    <Link to="/listing-details-v1">
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.listimg}
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
                      <Link to="#" className="edit">
                        <i className="fas fa-edit" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-body">
                    <div className="listing-author">
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.authorimg}
                        alt="author"
                      />
                      <div className="listing-author-body">
                        <p>
                          {" "}
                          <Link to="#">{item.authorname}</Link>{" "}
                        </p>
                        <span className="listing-date">{item.postdate}</span>
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
                      <Link to="/listing-details-v1" title={item.title}>
                        {item.title}
                      </Link>{" "}
                    </h5>
                    <span className="listing-price">
                      {new Intl.NumberFormat().format(
                        item.monthlyprice.toFixed(2)
                      )}
                      $ <span>/month</span>{" "}
                    </span>
                    <p className="listing-text">{item.text}</p>
                    <div className="acr-listing-icons">
                      <OverlayTrigger overlay={bedstip}>
                        <div className="acr-listing-icon">
                          <i className="flaticon-bedroom" />
                          <span className="acr-listing-icon-value">
                            {item.beds}
                          </span>
                        </div>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={bathstip}>
                        <div className="acr-listing-icon">
                          <i className="flaticon-bathroom" />
                          <span className="acr-listing-icon-value">
                            {item.bathrooms}
                          </span>
                        </div>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={areatip}>
                        <div className="acr-listing-icon">
                          <i className="flaticon-ruler" />
                          <span className="acr-listing-icon-value">
                            {new Intl.NumberFormat().format(item.area)}
                          </span>
                        </div>
                      </OverlayTrigger>
                    </div>
                    <div className="listing-gallery-wrapper">
                      <Link
                        to="/listing-details-v1"
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
              {/* Listing End */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
