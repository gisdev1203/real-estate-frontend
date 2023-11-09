import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calculator from "./Calculator";
import Select2 from "react-select2-wrapper";
import listing from "../../data/listings";
import Data from "../../data/select";
import { Collapse } from "react-bootstrap";

class Shopsidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      open2: true,
      open3: true,
    };
  }
  render() {
    const {
      locationlist,
      statuslist,
      pricerangelist,
      bedslist,
      bathroomslist,
      environmentlist,
      housearealist,
      landarealist,
    } = Data;

    const { open } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    return (
      <div className="sidebar sidebar-left">
        <div className="sidebar-widget">
          <div
            className="acr-collapse-trigger acr-custom-chevron-wrapper"
            onClick={() => this.setState({ open: !open })}
          >
            <h5>Filter Listings</h5>
            <div className="acr-custom-chevron">
              <span />
              <span />
            </div>
          </div>
          <Collapse in={this.state.open}>
            <div className="acr-collapsable">
              <div className="acr-filter-form">
                <form>
                  <div className="acr-custom-select form-group">
                    <label>Type: </label>
                    <Select2
                      data={locationlist}
                      options={{
                        placeholder: "Any Type",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>Environment: </label>
                    <Select2
                      data={environmentlist}
                      options={{
                        placeholder: "Any Environment",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>Status: </label>
                    <Select2
                      data={statuslist}
                      options={{
                        placeholder: "Any Status",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>Price Range: </label>
                    <Select2
                      data={pricerangelist}
                      options={{
                        placeholder: "Any Range",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>Beds: </label>
                    <Select2
                      data={bedslist}
                      options={{
                        placeholder: "Any amount",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>Bathrooms: </label>
                    <Select2
                      data={bathroomslist}
                      options={{
                        placeholder: "Any amount",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>House Area: </label>
                    <Select2
                      data={housearealist}
                      options={{
                        placeholder: "Any House Area",
                      }}
                    />
                  </div>
                  <div className="acr-custom-select form-group">
                    <label>Land Area: </label>
                    <Select2
                      data={landarealist}
                      options={{
                        placeholder: "Any Land Area",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-block btn-custom"
                    name="button"
                  >
                    Apply filters
                  </button>
                </form>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="sidebar-widget">
          <div
            className="acr-collapse-trigger acr-custom-chevron-wrapper"
            onClick={() => this.setState({ open2: !open2 })}
          >
            <h5>Recent Listing</h5>
            <div className="acr-custom-chevron">
              <span />
              <span />
            </div>
          </div>
          <Collapse in={this.state.open2}>
            <div className="acr-collapsable">
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
          </Collapse>
        </div>
        <div className="sidebar-widget">
          <div
            className="acr-collapse-trigger acr-custom-chevron-wrapper"
            onClick={() => this.setState({ open3: !open3 })}
          >
            <h5>Mortgage Calculator</h5>
            <div className="acr-custom-chevron">
              <span />
              <span />
            </div>
          </div>
          <Collapse in={this.state.open3}>
            <div className="acr-collapsable">
              <Calculator />
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Shopsidebar;
