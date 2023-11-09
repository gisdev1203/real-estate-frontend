import React, { useState, useReducer } from "react";
import Data from "../../../data/select";
import RentReducer from "../../../reducers/RentReducer";

var RentFilter = {};

const ListingFilter = ({ getData }) => {
  const [advanceSearch, setAdvanceSearch] = useState(true);

  const {
    locationlist,
    statuslist,
    pricerangelist,
    bedslist,
    bathroomslist,
    diameterlist,
  } = Data;

  const [RentState, rentDispatch] = useReducer(RentReducer, RentFilter);

  const filterData = () => {
    RentFilter = {
      location: RentState.location,
      type: RentState.type,
      bed: RentState.bed === undefined ? 0 : RentState.bed,
      bathroom: RentState.bathroom === undefined ? 0 : RentState.bathroom,
      price: RentState.price === undefined ? "0" : RentState.price,
      diameter: RentState.diameter,
      status: RentState.status === "Any Status" ? "" : RentState.status,
    };
    getData(RentFilter);
  };

  return (
    <div className="mt-8 mb-16">
      <div className="flex justify-center">
        <div className="acr-filter-form w-11/12 sm:w-9/12 min-md:w-8/12 md:9-12">
          <div className="border border-gray px-4 pt-4 pb-2 rounded-xl">
            <div className="row ">
              <div className="col-lg-3 col-md-6">
                <div className="">
                  <select
                    className="form-control"
                    name="location"
                    style={{ fontWeight: "bold", marginBottom: "15px" }}
                    value={RentState.location}
                    onChange={(e) =>
                      rentDispatch({
                        type: "UPDATE",
                        value: e.target.value,
                        key: "location",
                      })
                    }
                  >
                    <option value="" hidden>
                      Location
                    </option>
                    {locationlist.map((res) => {
                      return (
                        <option className="form-control" value={res}>
                          {res}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div>
                  <select
                    defaultValue="Any Status"
                    className="form-control"
                    name="Status"
                    style={{ fontWeight: "bold", marginBottom: "15px" }}
                    value={RentState.status}
                    onChange={(e) =>
                      rentDispatch({
                        type: "UPDATE",
                        value: e.target.value,
                        key: "status",
                      })
                    }
                  >
                    <option value="" hidden>
                      Status
                    </option>
                    {statuslist.map((res) => {
                      return (
                        <option className="form-control" value={res}>
                          {res}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <select
                    defaultValue={["0", "900000000000000000000"]}
                    className="form-control"
                    name="Price Range"
                    style={{ fontWeight: "bold", marginBottom: "15px" }}
                    value={RentState.price}
                    onChange={(e) =>
                      rentDispatch({
                        type: "UPDATE",
                        value: e.target.value,
                        key: "price",
                      })
                    }
                  >
                    <option value="" hidden>
                      Price Range
                    </option>
                    {pricerangelist.map((res) => {
                      return (
                        <option className="form-control" value={res.value}>
                          {res.res}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="submit-btn col-lg-2 col-md-6">
                <div className="form-group">
                  <button
                    onClick={() => filterData()}
                    className="btn-custom secondary btn-block"
                  >
                    Search listings
                  </button>
                </div>
              </div>
            </div>
            <div className={advanceSearch ? "advanced-search" : "d-block"}>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Beds"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={RentState.bed}
                      onChange={(e) =>
                        rentDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "bed",
                        })
                      }
                    >
                      <option value="" hidden>
                        Beds
                      </option>
                      {bedslist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                      <option className="form-control" value={5}>
                        5+
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Bathroom"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={RentState.bathroom}
                      onChange={(e) =>
                        rentDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "bathroom",
                        })
                      }
                    >
                      <option value="" hidden>
                        Bathrooms
                      </option>
                      {bathroomslist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                      <option className="form-control" value={5}>
                        5+
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Diameters"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={RentState.diameter}
                      onChange={(e) =>
                        rentDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "diameter",
                        })
                      }
                    >
                      <option value="" hidden>
                        Diameters
                      </option>
                      {diameterlist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className={
                advanceSearch
                  ? "advanced-search-trigger semi-circle active"
                  : "advanced-search-trigger semi-circle"
              }
              onClick={() => setAdvanceSearch(!advanceSearch)}
            >
              <i className="fas fa-chevron-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingFilter;
