import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, NavLink } from "react-bootstrap";
import App from "./App";

const Footer = () => {
  return (
    <footer className="acr-footer footer-2">
      {/* Footer Top Start */}
      <App />
      {/* Footer Top End */}
      {/* Footer Middle Start */}
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 footer-widget">
              <div className="footer-logo">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                  alt="acres"
                />{" "}
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <Dropdown className="acr-language-selector">
                <Dropdown.Toggle as={NavLink} className="dropdownicon">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/flags/united-states.png"
                    }
                    alt="flag"
                  />
                  <span>English</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <ul>
                    <li>
                      {" "}
                      <Link to="#">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/flags/china.png"
                          }
                          alt="flag"
                        />{" "}
                        Chinese
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="#">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/flags/united-states.png"
                          }
                          alt="flag"
                        />
                        English
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="#">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/flags/thailand.png"
                          }
                          alt="flag"
                        />{" "}
                        Thai
                      </Link>{" "}
                    </li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-lg-2 offset-lg-1 col-sm-4 footer-widget">
              <h5 className="widget-title">Menu</h5>
              <ul>
                <li>
                  {" "}
                  <Link to="/listing-map">Find Home</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/submit-listing">Add Listing</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/listing-map">Listings</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 footer-widget">
              <h5 className="widget-title">Information</h5>
              <ul>
                <li>
                  {" "}
                  <Link to="/about">About Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/services">Services</Link>{" "}
                </li>
              </ul>
            </div>
            {/* <div className="col-lg-2 col-sm-4 footer-widget">
                                <h5 className="widget-title">Legal</h5>
                                <ul>
                                    <li> <Link to="/legal">Privacy Policy</Link> </li>
                                    <li> <Link to="/legal">Refund Policy</Link> </li>
                                    <li> <Link to="/legal">Cookie Policy</Link> </li>
                                    <li> <Link to="/legal">Legal Terms</Link> </li>
                                </ul>
                            </div> */}
          </div>
        </div>
      </div>
      {/* Footer Middle End */}
      {/* Footer Bottom Start */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <p className="m-0">
                © Copyright 2020 - <Link to="#">AndroThemes</Link> All Rights
                Reserved.
              </p>
            </div>
            <div className="col-lg-5">
              <ul>
                <li>
                  {" "}
                  <Link to="/listing-map">Find a Home</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/submit-listing">Add Listing</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/agency-archive">View Agencies</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}
    </footer>
  );
};

export default Footer;
