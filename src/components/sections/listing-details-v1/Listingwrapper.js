import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  // OverlayTrigger,
  // Tooltip,
  Dropdown,
  NavLink,
  Accordion,
  // Card,
} from "react-bootstrap";
import Calculator from "../../layouts/Calculator";
import $ from "jquery";
import "magnific-popup";
import axios from "axios";

// Gallery

// const gallerytip = <Tooltip>Gallery</Tooltip>;
// const bedstip = <Tooltip>Beds</Tooltip>;
// const bathstip = <Tooltip>Bathrooms</Tooltip>;
// const areatip = <Tooltip>Square Feet</Tooltip>;

const Listingwrapper = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    Location: "location",
    BasicInformation: "BasicInformation",
    Details: "Details",
    Features: "Features",
    Gallery: "Gallery",
  });

  const [featureList, setFeatureList] = useState([]);
  const [listing, setListing] = useState([]);
  const [showmore, setShowMore] = useState(false);
  const { id } = useParams();

  const getData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/submitlisting/get-properties`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      }
    );
    const data = await response.json();
    const find = data.result.find((res) => res._id === id);
    setState(find);
    const features = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/admin/get-features`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      }
    );
    const featureList = await features.json();
    setFeatureList(featureList.result);
  };
  useEffect(() => {
    getData();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/submitlisting/lastsubmit`)
      .then((res) => {
        setListing(res.data.result);
      });
  });

  function popup() {
    var items = state.Gallery.picture.map((name) => {
      return {
        src: `${process.env.REACT_APP_SERVER_URL}/${name}`,
      };
    });

    $(".gallery-thumb").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // markup of counter
      items: items,
    });
  }

  return (
    <div className="section listing-wrapper" style={{ marginBottom: "10%" }}>
      <div className="container">
        <div className="row">
          {/* Listings Start */}
          <div className="col-lg-8">
            {/* Content Start */}
            <div className="listing-content">
              <h4>Property Overview</h4>
              <p>{state.BasicInformation.description}</p>
              <div className="row">
                {state.Gallery.picture &&
                  state.Gallery.picture.map((item, i) => (
                    <div key={i} className="col-md-6 mb-3">
                      <button
                        onClick={() => popup()}
                        className="gallery-thumb"
                        style={{ border: "none", background: "none" }}
                      >
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${item}`}
                          alt="post"
                          style={{ width: "300px", height: "200px" }}
                        />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div style={{ height: "8%", padding: "5% 0", textAlign: "center" }}>
              <h4 style={{ marginBottom: "2%" }}>Direction</h4>
              <iframe
                width="100%"
                height="95%"
                title="direction"
                src={`https://maps.google.com/maps?q=${state.Location.lat},${state.Location.long}&hl=es;z=14&output=embed`}
              ></iframe>
            </div>
            {/* Content End */}
            {/* Price Range In the area Start */}
            <div className="section">
              <div className="acr-area-price">
                <span style={{ left: "30%" }}>
                  {state.BasicInformation.price}
                  {state.BasicInformation.currency}
                </span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="acr-area-price-wrapper">
                  <div className="acr-area-price-min">
                    <h5>562,000$</h5>
                    <span>Lowest</span>
                  </div>
                  <h5>Price range in the area</h5>
                  <div className="acr-area-price-max">
                    <h5>1,280,000$</h5>
                    <span>Highest</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Price Range In the area End */}
            <div className="section section-padding pt-0 acr-listing-features">
              <h4>Features</h4>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="listing-feature-wrapper">
                    <div className="listing-feature">
                      <i className="flaticon-key" />
                      <h6 className="listing-feature-label">Property Id</h6>
                      <span className="listing-feature-value">
                        {state.Details.id}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-garage" />
                      <h6 className="listing-feature-label">Parking</h6>
                      <span className="listing-feature-value">
                        {state.Details.parking}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-garage" />
                      <h6 className="listing-feature-label">Building Floor</h6>
                      <span className="listing-feature-value">
                        {state.Details.story}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-history" />
                      <h6 className="listing-feature-label">Year Built</h6>
                      <span className="listing-feature-value">
                        {state.Details.built}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-picture" />
                      <h6 className="listing-feature-label">Propery Type</h6>
                      <span className="listing-feature-value">
                        {state.BasicInformation.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="listing-feature-wrapper">
                    <div className="listing-feature">
                      <i className="flaticon-ruler" />
                      <h6 className="listing-feature-label">Property Size</h6>
                      <span className="listing-feature-value">
                        {`${state.BasicInformation.space} sqft`}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-ruler" />
                      <h6 className="listing-feature-label">Lot Size</h6>
                      <span className="listing-feature-value">
                        {state.Details.lotsize}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-ruler" />
                      <h6 className="listing-feature-label">View</h6>
                      <span className="listing-feature-value">
                        {state.Details.view}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-bathroom" />
                      <h6 className="listing-feature-label">Bathrooms</h6>
                      <span className="listing-feature-value">
                        {state.Details.bathrooms}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-pillow" />
                      <h6 className="listing-feature-label">Bed Rooms</h6>
                      <span className="listing-feature-value">
                        {state.Details.beds}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={showmore ? "d-block" : `hidden-listing-features`}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    {featureList
                      .slice(0, featureList.length / 2 + 1)
                      .map((item, key) => (
                        <div key={key} className="listing-feature">
                          <i>
                            <img
                              src={`${process.env.REACT_APP_SERVER_URL}/${item.icon}`}
                              alt="FeatureIcon"
                            />
                          </i>
                          <h6 className="listing-feature-label">{item.name}</h6>
                          {state.Features.indexOf(item._id) !== -1
                            ? "Yes"
                            : "No"}
                        </div>
                      ))}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="listing-feature">
                      <i className="flaticon-new" />
                      <h6 className="listing-feature-label">Condition</h6>
                      <span className="listing-feature-value">
                        {state.Details.condition
                          ? state.Details.condition
                          : "--"}
                      </span>
                    </div>
                    {featureList
                      .slice(featureList.length / 2 + 1)
                      .map((item, key) => (
                        <div key={key} className="listing-feature">
                          <i className={`flaticon-${item.icon}`}></i>
                          <h6 className="listing-feature-label">{item.name}</h6>
                          <span className="listing-feature-value">
                            {state.Features.indexOf(item._id) !== -1
                              ? "Yes"
                              : "No"}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="load-more-features btn-custom-2 light-grey btn-block"
                onClick={() => setShowMore(!showmore)}
              >
                {showmore ? "Few" : "More"}
              </button>
            </div>
            <div className="section pt-0 acr-listing-nearby">
              <h4>What's Nearby</h4>
              {state.Details.near &&
                state.Details.near.map((item, key) => (
                  <div className="listing-nearby-item" key={key}>
                    <h6 className="custom-success row">
                      {/* <i className="fas fa-utensils" /> */}
                      <i className="col-1">
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${item.neartype.icon}`}
                          alt="TypeIcon"
                        ></img>
                      </i>
                      <p
                        className="col-6"
                        style={{
                          color: `${item.neartype.color}`,
                          padding: "0px",
                        }}
                      >
                        {item.neartype.name}
                      </p>
                    </h6>
                    <ul>
                      <li>
                        <span>
                          <b>{item.name}</b> <span>({item.distance} km)</span>{" "}
                        </span>
                        <ul>
                          <li className="custom-warning">
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li className="custom-warning">
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li className="custom-warning">
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li className="custom-warning">
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
            <div className="section pt-0">
              <h4>Property Video</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
              {state.BasicInformation.video &&
              state.BasicInformation.video.slice(0, 5) === "https" ? (
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    title="video"
                    className="embed-responsive-item"
                    src={state.BasicInformation.video}
                  />
                </div>
              ) : state.BasicInformation.video ? (
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    title="video"
                    className="embed-responsive-item"
                    src={`https://${state.BasicInformation.video}`}
                  />
                </div>
              ) : (
                <div className="embed-responsive embed-responsive-21by9">
                  <h5>No Property Video Found</h5>
                </div>
              )}
            </div>
            <div className="section pt-0 acr-listing-history">
              <h4>Property History</h4>
              <Accordion defaultActiveKey="0" className="with-gap">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>1979 - 1999</Accordion.Header>
                  <Accordion.Body className="collapseparent">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/listing-single/history-1.jpg"
                          }
                          alt="property history"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h5>The Beginning</h5>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>2000 - 2012</Accordion.Header>
                  <Accordion.Body className="collapseparent">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/listing-single/history-2.jpg"
                          }
                          alt="property history"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h5>The Rebuilding Phase</h5>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor,
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>2013 - Till date</Accordion.Header>
                  <Accordion.Body className="collapseparent">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/listing-single/history-3.jpg"
                          }
                          alt="property history"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h5>Modernization</h5>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor,
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="section pt-0">
              <h4>Schedule Link tour</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="fname"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date"
                      name="date"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      placeholder="Type your comment..."
                      name="comment"
                      rows={7}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-custom primary"
                  name="button"
                >
                  Schedule Tour
                </button>
              </form>
            </div>
            {/* Pagination Start */}
            <div className="section p-0 post-single-pagination-wrapper">
              <div className="post-single-pagination post-prev">
                <i className="fas fa-arrow-left" />
                <Link to="#" className="post-single-pagination-content">
                  <span>Prev Listing</span>
                  <h6>Theodore Lowe, Azusa New York 39531</h6>
                </Link>
              </div>
              <div className="post-single-pagination post-next">
                <Link to="#" className="post-single-pagination-content">
                  <span>Next Listing</span>
                  <h6>Cecilia Chapman, Mankato Mississippi 96522</h6>
                </Link>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
            {/* Pagination End */}
            {/* Similar Start */}

            {/* Similar End */}
          </div>
          {/* Listings End */}

          {/* Sidebar Start */}
          <div className="col-lg-4">
            <div className="sidebar sticky-sidebar">
              <div className="sidebar-widget">
                <h5>Meet The Agent</h5>
                {/* Author Start */}
                <div className="media sidebar-author listing-agent">
                  <Link to="#">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/people/1.jpg"}
                      alt="agent"
                    />
                  </Link>
                  <div className="media-body">
                    <h6>
                      {" "}
                      <Link to="#">Freddy Burben</Link>{" "}
                    </h6>
                    <span>Company Agent</span>
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
                          <Link to="/listing-grid">
                            {" "}
                            <i className="fas fa-th-list" /> View Listings
                          </Link>{" "}
                        </li>
                        <li>
                          {" "}
                          <Link to="#">
                            {" "}
                            <i className="fas fa-star" /> Save Agent
                          </Link>{" "}
                        </li>
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {/* Author End */}
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
              <div className="sidebar-widget">
                <h5>Recent Listings</h5>
                {/* Listing Start */}
                {listing.map((item, i) => (
                  <div key={i} className="listing listing-list">
                    <div className="listing-thumbnail">
                      <Link
                        onClick={() => {
                          navigate(`/listing-details-v1/${item._id}`);
                          window.location.reload(false);
                        }}
                      >
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${item.Gallery.file}`}
                          alt="listing"
                        />
                      </Link>
                    </div>
                    <div className="listing-body">
                      <h6 className="listing-title">
                        {" "}
                        <Link
                          onClick={() => {
                            navigate(`/listing-details-v1/${item._id}`);
                            window.location.reload(false);
                          }}
                          title={item.BasicInformation.name}
                        >
                          {item.BasicInformation.name}
                        </Link>{" "}
                      </h6>
                      <span className="listing-price">
                        {item.BasicInformation.currency}
                        {item.BasicInformation.price}
                        {item.BasicInformation.status === "Rental" ? (
                          <span>/{item.BasicInformation.period}</span>
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Listing End */}
              </div>
              <div className="sidebar-widget">
                <h5>Mortgage Calculator</h5>
                <Calculator />
              </div>
            </div>
          </div>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
  );
};

export default Listingwrapper;
