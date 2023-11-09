import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Tooltip,
  Dropdown,
  NavLink,
  Tab,
  Nav,
} from "react-bootstrap";
import agents from "../../../data/agents";
import listing from "../../../data/listings";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

class Content extends Component {
  render() {
    return (
      <div className="section agent-wrapper">
        <div className="container">
          <div className="row">
            <Tab.Container defaultActiveKey="tab1">
              {/* Agency Sidebar Start */}
              <div className="col-lg-4">
                <div className="sidebar sticky-sidebar sidebar-left">
                  <div className="sidebar-widget">
                    <Nav variant="tabs" className="nav nav-tabs tab-cards">
                      <Nav.Item>
                        <Nav.Link eventKey="tab1">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab2">Listings</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab3">Agents</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="sidebar-widget sidebar-widget-agent">
                    {/* Author Start */}
                    <div className="media sidebar-author listing-agent">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/img/companies/2.png"
                        }
                        alt="agent"
                      />
                      <div className="media-body">
                        <h6> Jumpy Co. Real Estate</h6>
                        <span>Real Estate</span>
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
                                <i className="fas fa-phone" /> Call Jumpy Co.
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link to="#">
                                {" "}
                                <i className="fas fa-star" /> Save Agency
                              </Link>{" "}
                            </li>
                          </ul>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    {/* Author End */}
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    {/* Contact Start */}
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Enter your message"
                          className="form-control"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-custom primary light btn-block"
                      >
                        Send Message
                      </button>
                    </form>
                    {/* Contact End */}
                  </div>
                </div>
              </div>
              {/* Agency Sidebar End */}
              {/* Agent Tabs Start */}
              <div className="col-lg-8">
                <Tab.Content className="m-0">
                  <Tab.Pane eventKey="tab1">
                    <div className="agency-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <h4>Into the subject</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                        <Link to="#">Lorem Ipsum has been the industry's</Link>{" "}
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </p>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/blog/4.jpg"}
                        alt="post"
                      />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting
                      </p>
                      <blockquote>
                        <h5>Real estate is booming</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </blockquote>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <Link
                            to="assets/img/blog/9.jpg"
                            className="gallery-thumb"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/blog/9.jpg"
                              }
                              alt="post"
                            />
                          </Link>
                        </div>
                        <div className="col-md-6">
                          <Link
                            to="assets/img/blog/7.jpg"
                            className="gallery-thumb"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/blog/7.jpg"
                              }
                              alt="post"
                            />
                          </Link>
                        </div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="row">
                      {listing.slice(0, 4).map((item, i) => (
                        <div key={i} className="col-md-6">
                          <div className="listing">
                            <div className="listing-thumbnail">
                              <Link to="/listing-details-v1">
                                <img
                                  src={
                                    process.env.PUBLIC_URL + "/" + item.gridimg
                                  }
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
                                  <span className="listing-badge sale">
                                    On Sale
                                  </span>
                                ) : (
                                  ""
                                )}
                                {item.pending === true ? (
                                  <span className="listing-badge pending">
                                    {" "}
                                    Pending
                                  </span>
                                ) : (
                                  ""
                                )}
                                {item.rental === true ? (
                                  <span className="listing-badge rent">
                                    {" "}
                                    Rental
                                  </span>
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
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/" +
                                    item.authorimg
                                  }
                                  alt="author"
                                />
                                <div className="listing-author-body">
                                  <p>
                                    {" "}
                                    <Link to="#">{item.authorname}</Link>{" "}
                                  </p>
                                  <span className="listing-date">
                                    {item.postdate}
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
                                          <i className="fas fa-phone" /> Call
                                          Agent
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
                                          <i className="fas fa-bookmark" /> Book
                                          Tour
                                        </Link>{" "}
                                      </li>
                                    </ul>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <h5 className="listing-title">
                                {" "}
                                <Link
                                  to="/listing-details-v1"
                                  title={item.title}
                                >
                                  {item.title}
                                </Link>{" "}
                              </h5>
                              <span className="listing-price">
                                {new Intl.NumberFormat().format(
                                  item.monthlyprice.toFixed(2)
                                )}
                                ${" "}
                                <span>
                                  {item.monthlyprice == null ? "" : "/month"}
                                </span>{" "}
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
                                      {new Intl.NumberFormat().format(
                                        item.area
                                      )}
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
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <div className="row">
                      {/* Agent Start */}
                      {agents.slice(0, 4).map((item, i) => (
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
                                <Link to="/agent-details">
                                  {item.name}
                                </Link>{" "}
                              </h6>
                              <span>{item.post}</span>
                              <p>{item.text}</p>
                              <Link
                                to="/agent-details"
                                className="btn-custom secondary btn-sm"
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* Agent End */}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                {/* Agent Tabs End */}
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
