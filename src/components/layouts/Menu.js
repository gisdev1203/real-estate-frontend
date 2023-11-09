import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const Menu = () => {
  const [statuslist, setStatuslist] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-categories`)
      .then((res) => {
        setStatuslist(res.data.result);
      });
  }, []);
  return (
    <Fragment>
      {/* Logo */}
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => window.location.replace("/")}
      >
        {" "}
        <img
          className="p-2"
          src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
          alt="logo"
        />{" "}
      </Link>
      {/* Menu */}
      <ul className="navbar-nav">
        <li className="menu-item menu-item-has-children">
          <Link to="/about">About Us</Link>
        </li>
        <li className="menu-item menu-item-has-children items-center">
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Distress">
                    Help With Distress Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Planing">
                    Financial Planing
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Modification">
                    Loan Modification
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-4"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Management">
                    Property Management
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-5"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Planner">
                    Investment Planner
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>

        <li className="menu-item menu-item-has-children">
          {/* <Link to="/sell">Sell</Link> */}
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Properties
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {statuslist.map((res, key) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      href="#/action-1"
                      style={{
                        padding: "6% 2%",
                        margin: "0px 8px",
                        width: "95%",
                      }}
                    >
                      <Link
                        style={{ padding: "0" }}
                        to={"/property/" + res.name}
                      >
                        {res.name}
                      </Link>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children">
          {/* <Link to="/sell">Sell</Link> */}
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Sell
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {statuslist.map((res, key) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      href="#/action-1"
                      style={{
                        padding: "6% 2%",
                        margin: "0px 8px",
                        width: "95%",
                      }}
                    >
                      <Link style={{ padding: "0" }} to={"/sell/" + res.name}>
                        {res.name}
                      </Link>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        {/* <li className="menu-item menu-item-has-children">
          <Link to="/buy">Buy</Link>
        </li> */}
        <li className="menu-item menu-item-has-children">
          {/* <Link to="/rent">Rent</Link> */}
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Rent
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {statuslist.map((res, key) => {
                  return (
                    <Dropdown.Item
                      href="#/action-1"
                      key={key}
                      style={{
                        padding: "6% 2%",
                        margin: "0px 8px",
                        width: "95%",
                      }}
                    >
                      <Link style={{ padding: "0" }} to={"/rent/" + res.name}>
                        {res.name}
                      </Link>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children items-center">
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Think To Know
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Property">
                    How to buy property in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Terms">
                    Get a long terms visa in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Estate">
                    Thailand real estate laws
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Retire">
                    How to retire in Thailand
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children items-center">
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Finance
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Mortgage">
                    How to get a mortgage loan in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Invest">
                    Can you invest in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Loans">
                    Can you get a loans in Thailand
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <Link to="/agent">Retirement Asia</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Menu;
