import React, { useState, useEffect } from "react";
import axios from "axios";
var PriceFilter = {};

const ListingFilter = ({ getData }) => {
  // const [advanceSearch, setAdvanceSearch] = useState(true);

  const [typeList, setTypeList] = useState([]);
  const [location, setLocation] = useState("");
  const [buy, setBuy] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-categories`)
      .then((res) => {
        setTypeList(res.data.result);
      });
  }, []);

  const filterData = () => {
    PriceFilter = {
      location: location,
      buy: buy === "any" ? "" : buy,
      type: type === "any" ? "" : type,
      minPrice: minPrice,
      maxPrice: maxPrice,
    };
    getData(PriceFilter);
  };

  return (
    <div className="mt-8 mb-16">
      <div className="flex justify-center">
        <div className="w-11/12 min-md:w-8/12 md:9-12">
          <div className="border border-gray rounded-lg px-4 pt-4">
            <div className="row">
              <div className="col-lg-4 col-md-4 grid-custom">
                <input
                  type="text"
                  name="location"
                  className="col-md-6 form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search by location, station, condo name or keyword"
                  style={{ fontWeight: "bold" }}
                />
              </div>
              <div className="col-lg-2 col-md-2 grid-custom">
                <select
                  className="col-md-2 form-control"
                  name="Status"
                  style={{ fontWeight: "bold" }}
                  value={buy}
                  onChange={(e) => setBuy(e.target.value)}
                >
                  <option value="" hidden>
                    Buy
                  </option>
                  <option className="form-control" value="any">
                    Any
                  </option>
                  <option className="form-control" value="buy">
                    Buy
                  </option>
                  <option className="form-control" value="sell">
                    Sell
                  </option>
                </select>
              </div>
              <div className="col-lg-3 col-md-3 grid-custom">
                <select
                  className="col-md-2 form-control"
                  name="type"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="" hidden>
                    Property Type
                  </option>
                  <option className="form-control" value="any">
                    Any type
                  </option>
                  {typeList.map((res, key) => {
                    return (
                      <option
                        className="form-control"
                        value={res.name}
                        key={"status" + key}
                      >
                        {res.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-2 col-md-2 grid-custom">
                <button
                  onClick={() => filterData()}
                  className="btn-block form-control col-md-2"
                  style={{
                    borderRadius: 0,
                    backgroundColor: "#fc3206",
                    border: "none",
                    color: "white",
                    fontSize: "19px",
                  }}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-2 grid-custom">
                <input
                  className="form-control"
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min Price"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                />
              </div>
              <div className="col-md-2 grid-custom">
                <input
                  className="form-control"
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max Price"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                />
              </div>
              <div className="col-md-2 grid-custom">
                <input
                  className="form-control"
                  type="text"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  placeholder="Beds"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                />
              </div>
              <div className="col-md-3">
                {/* <input type="checkbox"></input>
                <span className="banner-search-checkbox">
                  Near transport station
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingFilter;
