import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import agents from "../../../data/agents";
import listing from "../../../data/listings";
import { blogcategory } from "../../../data/blog";
import classNames from "classnames";
import Loader from "../../layouts/Loader";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      items: agents,
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
        <div key={i} className="col-lg-6">
          <div className="acr-agent">
            {item.star === true ? (
              <div className="listing-badge featured">
                <i className="fas fa-star" />
              </div>
            ) : (
              ""
            )}
            <div className="acr-dots-wrapper acr-agent-thumb">
              <div className="acr-dots" />
              <Link to="/agent-details">
                <img
                  src={process.env.PUBLIC_URL + "/" + item.img}
                  alt="agent"
                />
              </Link>
            </div>
            <div className="acr-agent-body">
              <h6>
                {" "}
                <Link to="/agent-details">{item.name}</Link>{" "}
              </h6>
              <span>{item.post}</span>
              <p>{item.text}</p>
              <Link to="/agent-details" className="btn-custom secondary btn-sm">
                View Profile
              </Link>
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
            <div className="col-lg-8">
              <div className="row">
                {/* Agent Start */}
                {this.state.loading === false ? renderitems : <Loader />}
                {/* Agent End */}
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
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <h5>Recent Listings</h5>
                  {/* Listing Start */}
                  {listing
                    .filter(function (item) {
                      return item.recent === true;
                    })
                    .slice(0, 4)
                    .map((item, i) => (
                      <div key={i} className="listing listing-list">
                        <div className="listing-thumbnail">
                          <Link to="/listing-details-v1">
                            <img
                              src={process.env.PUBLIC_URL + "/" + item.gridimg}
                              alt="listing"
                            />
                          </Link>
                        </div>
                        <div className="listing-body">
                          <h6 className="listing-title">
                            {" "}
                            <Link to="/listing-details-v1" title={item.title}>
                              {item.title}
                            </Link>{" "}
                          </h6>
                          <span className="listing-price">
                            {new Intl.NumberFormat().format(
                              item.monthlyprice.toFixed(2)
                            )}
                            $ <span>/month</span>{" "}
                          </span>
                        </div>
                      </div>
                    ))}
                  {/* Listing End */}
                </div>
                <div className="sidebar-widget sidebar-list">
                  <h5>Popular Categories</h5>
                  <ul>
                    {blogcategory.map((item, i) => (
                      <li key={i}>
                        <Link to="/blog-single">
                          {" "}
                          {item.title} <span>({item.count})</span>
                          <i className="fas fa-chevron-right" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
