import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Sidebar from "../../layouts/Shopsidebar";
import listing from "../../../data/listings";
import classNames from "classnames";
import Loader from "../../layouts/Loader";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const gridtip = <Tooltip>Grid</Tooltip>;
const listtip = <Tooltip>List</Tooltip>;
const maptip = <Tooltip>Map</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

class Content extends Component {
  constructor() {
    super();
    this.state = {
      items: listing,
      currentPage: 1,
      itemsPerPage: 4,
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var paginationContent = event.target.closest(".pagination-content");

    if (paginationContent) {
      paginationContent.scrollIntoView();
    }

    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        currentPage: Number(event.target.getAttribute("data-page")),
        loading: false,
      });
    }, 2000);
  }
  render() {
    const { items, currentPage, itemsPerPage } = this.state;

    // Logic for displaying items
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

    const renderitems = currentitems.map((item, i) => {
      return (
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
              {new Intl.NumberFormat().format(item.monthlyprice.toFixed(2))}${" "}
              <span>/month</span>{" "}
            </span>
            <p className="listing-text">{item.text}</p>
            <div className="acr-listing-icons">
              <OverlayTrigger overlay={bedstip}>
                <div className="acr-listing-icon">
                  <i className="flaticon-bedroom" />
                  <span className="acr-listing-icon-value">{item.beds}</span>
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
      );
    });
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPagination = pageNumbers.map((number) => {
      const activeCondition = this.state.currentPage === number ? "active" : "";
      return (
        <Fragment key={number}>
          {pageNumbers.length > 1 ? (
            <li
              className={classNames("page-item", { active: activeCondition })}
            >
              <Link
                className="page-link"
                to="#"
                data-page={number}
                onClick={this.handleClick}
              >
                {number}
              </Link>
            </li>
          ) : (
            ""
          )}
        </Fragment>
      );
    });
    return (
      <div className="section pagination-content">
        <div className="container">
          <div className="row">
            {/* Sidebar Start */}
            <div className="col-lg-4">
              <Sidebar />
            </div>
            {/* Sidebar End */}
            {/* Posts Start */}
            <div className="col-lg-8">
              {/* Controls Start */}
              <div className="acr-global-listing-controls">
                <div className="acr-listing-active-filters">
                  <Link to="#">
                    <div className="close-btn close-dark">
                      <span />
                      <span />
                    </div>
                    Any Status
                  </Link>
                  <Link to="#">
                    <div className="close-btn close-dark">
                      <span />
                      <span />
                    </div>
                    West Roxbury, MA
                  </Link>
                  <Link to="#">
                    <div className="close-btn close-dark">
                      <span />
                      <span />
                    </div>
                    House
                  </Link>
                </div>
                <div className="acr-toggle-views">
                  <OverlayTrigger placement="top" overlay={gridtip}>
                    <Link to="/listing-grid">
                      <i className="fas fa-th-large" />
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={listtip}>
                    <Link to="/listing-list" className="active">
                      <i className="fas fa-th-list" />
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={maptip}>
                    <Link to="/listing-map">
                      <i className="fas fa-map" />
                    </Link>
                  </OverlayTrigger>
                </div>
              </div>
              {/* Controls End */}
              <div className="row">
                {/* Listing Start */}
                {this.state.loading === false ? renderitems : <Loader />}
                {/* Listing End */}
              </div>
              {/* Pagination Start */}
              {pageNumbers.length > 1 ? (
                <ul className="pagination">
                  {/* Prev */}
                  {/* to show previous, we need to be on the 2nd or more page */}
                  {pageNumbers.length > 1 && this.state.currentPage !== 1 ? (
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                        data-page={this.state.currentPage - 1}
                        onClick={this.handleClick}
                      >
                        <i className="fas fa-chevron-left" />
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Prev */}
                  {renderPagination}
                  {/* Next */}
                  {/* to show next, we should not be on the last page */}
                  {pageNumbers.length > 1 &&
                  this.state.currentPage !== pageNumbers.length ? (
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                        data-page={parseInt(this.state.currentPage + 1)}
                        onClick={this.handleClick}
                      >
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Next */}
                </ul>
              ) : (
                ""
              )}
              {/* Pagination End */}
            </div>
            {/* Posts End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
