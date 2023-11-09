import React, { Component } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import listing from "../../../data/listings";
import Data from "../../../data/select";
import Listingmap from "./Listingmap";
import classNames from "classnames";
import Select from "react-select";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advancesearch: false,
    };
    this.advancetoggle = this.advancetoggle.bind(this);
  }
  advancetoggle() {
    this.setState({
      advancesearch: !this.state.advancesearch,
    });
  }
  render() {
    const {
      locationlist,
      statuslist,
      pricerangelist,
      bedslist,
      bathroomslist,
      typelist,
      diameterlist,
      floorlist,
      sortbylist,
    } = Data;
    return (
      <div className="listing-map-wrapper">
        {/* Listings Start */}
        <div className="listing-main-wrapper">
          {/* Filter Start */}
          <div
            className={classNames("acr-filter-form", {
              "d-block": this.state.advancesearch,
            })}
          >
            <div className="acr-filter-form-header">
              <h4>Filter</h4>
              <div
                className="close-btn close-dark filter-trigger"
                onClick={this.advancetoggle}
              >
                <span />
                <span />
              </div>
            </div>
            <form method="post">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="form-group acr-custom-select">
                    <label>Location: </label>
                    <Select
                      options={locationlist}
                      // options={{
                      //   placeholder: "Any Location",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-group acr-custom-select">
                    <label>Status: </label>
                    <Select
                      Options={statuslist}
                      // options={{
                      //   placeholder: "Any Location",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-group acr-custom-select">
                    <label>Price Range: </label>
                    <Select
                      options={pricerangelist}
                      // options={{
                      //   placeholder: "Any Range",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="acr-custom-select form-group">
                    <label>Beds: </label>
                    <Select
                      options={bedslist}
                      // options={{
                      //   placeholder: "Any amount",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="acr-custom-select form-group">
                    <label>Bathrooms: </label>
                    <Select
                      options={bathroomslist}
                      // options={{
                      //   placeholder: "Any amount",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="acr-custom-select form-group">
                    <label>Type: </label>
                    <Select
                      options={typelist}
                      // options={{
                      //   placeholder: "Any Type",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="acr-custom-select form-group">
                    <label>Diameter: </label>
                    <Select
                      options={diameterlist}
                      // options={{
                      //   placeholder: "Any Range",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="acr-custom-select form-group">
                    <label>Floor: </label>
                    <Select
                      options={floorlist}
                      // options={{
                      //   placeholder: "Any Floor",
                      // }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="acr-custom-select form-group">
                    <label>Sort by: </label>
                    <Select
                      options={sortbylist}
                      // options={{
                      //   placeholder: "Any",
                      // }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="filter-trigger btn-custom">
                  Apply filters
                </button>
              </div>
            </form>
          </div>
          <div className="acr-listing-filter-wrapper">
            <div className="row">
              <div className="col-lg-6 form-group">
                <div className="search-wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search locations"
                    name="search"
                  />
                  <button type="submit" className="btn-custom" name="button">
                    <i className="flaticon-search" />
                  </button>
                </div>
              </div>
              <div className="col-lg-6 form-group text-right">
                <button
                  type="button"
                  className="btn-custom-2 light-grey filter-trigger"
                  onClick={this.advancetoggle}
                >
                  Advanced Search
                </button>
              </div>
            </div>
          </div>
          {/* Filter End */}
          <div className="row">
            {/* Listing Start */}
            {listing.map((item, i) => (
              <div key={i} className="col-md-6 col-sm-6">
                <div className="listing">
                  <div className="listing-thumbnail">
                    <Link to="/listing-details-v1">
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.gridimg}
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
                      <Link
                        to="#"
                        className="fly-to-location"
                        data-lat="-77.020945"
                        data-lng="38.878241"
                      >
                        <i className="fas fa-map-marker-alt" />
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
              </div>
            ))}
            {/* Listing End */}
          </div>
        </div>
        {/* Listings End */}
        {/* Map Start */}
        <Listingmap />
        {/* Map End */}
      </div>
    );
  }
}

export default Content;
