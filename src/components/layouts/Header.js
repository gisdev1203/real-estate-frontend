import React, { useState, useEffect, Fragment } from "react";
import Menu from "../layouts/Menu";
import Mobilemenu from "../layouts/Mobilemenu";
import { Link } from "react-router-dom";
import { Dropdown, NavLink } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  const [navtoggle, setnavtoggle] = useState(false);
  const [sticky, setSticky] = useState("false");
  // const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.replace("/");
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 100 ? setSticky("sticky") : setSticky("");
      },
      false
    );
  });

  return (
    <Fragment>
      {/* Aside (Mobile Navigation) */}
      <aside className={navtoggle ? "main-aside open" : "main-aside"}>
        <div className="aside-title">
          <div className="aside-controls aside-trigger">
            <h4>Menu</h4>
            <div
              className="close-btn close-dark"
              onClick={() => setnavtoggle(false)}
            >
              <span />
              <span />
            </div>
          </div>
        </div>
        <Mobilemenu />
      </aside>
      <div
        className="aside-overlay aside-trigger"
        onClick={() => setnavtoggle(false)}
      />
      {/* Header Start */}
      <header className={`main-header header-fw can-sticky header-1 ${sticky}`}>
        {/* Top Header Start */}
        <div className="top-header">
          {user == null ? (
            <div className="top-header-inner">
              <ul className="social-media">
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-facebook-f" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-pinterest-p" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-linkedin-in" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-twitter" />{" "}
                  </Link>{" "}
                </li>
              </ul>
              <ul className="top-header-nav">
                <li>
                  {" "}
                  <Link to="/login"> Login</Link>{" "}
                </li>
                <li>or</li>
                <li>
                  {" "}
                  <Link to="/register"> Signup</Link>{" "}
                </li>
              </ul>
            </div>
          ) : (
            <div className="top-header-inner">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    backgroundColor: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                  }}
                >
                  {user.name}
                  {""}:{""}
                  {user.user}
                </p>
                <p
                  onClick={() => logout()}
                  style={{
                    backgroundColor: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  Log Out
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Top Header End */}
        <nav className="navbar">
          {/* Menu */}
          <Menu />
          <div className="header-controls">
            <ul className="header-controls-inner d-none d-lg-flex">
              <li>
                <Link to="/submit-listing" className="btn-custom primary">
                  Submit Listing <i className="fas fa-plus" />{" "}
                </Link>
              </li>
            </ul>
            {/* Toggler */}
            <div
              className="aside-toggler aside-trigger"
              onClick={() => setnavtoggle(true)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div>
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
                          process.env.PUBLIC_URL + "/assets/img/flags/china.png"
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
        </nav>
      </header>
      {/* Header End */}
    </Fragment>
  );
};

export default Header;
