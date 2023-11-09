import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/get-propertycount-by-category`)
      .then((res) => {
        setFlag(true);
        setData(res.data);
      });
  }, []);

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Categories</h5>
          <h2 className="title">Browse By Category</h2>
        </div>
        <div className="row">
          {data.length === 0 && flag ? (
            <h5>No Category</h5>
          ) : data.length === 0 && flag === false ? (
            <h5>Loading...</h5>
          ) : (
            data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="acr-category">
                  <div className="acr-category-thumb">
                    <i>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}/${item.icon}`}
                        alt="CategoryIcon"
                        style={{
                          borderRadius: "inherit",
                          height: "inherit",
                          width: "inherit",
                        }}
                      />
                    </i>
                    {/* <i className={"flaticon-house"} /> */}
                    <Link to={`/property/${item.name}`}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}/${item.img}`}
                        // className="img-fluid h-100"
                        style={{
                          width: "-webkit-fill-available",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        alt="category"
                      />
                    </Link>
                    <div className="acr-category-body">
                      <h5>
                        {" "}
                        <Link to={`/property/${item.name}`}>
                          {item.name}
                        </Link>{" "}
                      </h5>
                      <span>{item.count} Listings</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
