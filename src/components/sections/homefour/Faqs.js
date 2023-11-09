import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import contactinfo from "../../../data/contactinfo.json";
import axios from "axios";

const Faqs = () => {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-faqs`)
      .then((res) => {
        setFlag(true);
        setData(res.data.result);
      });
  }, []);
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">FAQ</h5>
          <h2 className="title">FAQ</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-lg-30">
            {data.length === 0 && flag ? (
              <h5>No Data</h5>
            ) : data.length === 0 && flag === false ? (
              <h5>Loading ...</h5>
            ) : (
              <Accordion defaultActiveKey="0" className="with-gap">
                {data.map((res, key) => (
                  <Accordion.Item eventKey={key + 1} key={key}>
                    <Accordion.Header>{res.title}</Accordion.Header>
                    <Accordion.Body className="collapseparent">
                      {res.content.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            )}
          </div>
          <div className="col-lg-4 infographics-5">
            {contactinfo.slice(0, 2).map((item, i) => (
              <div key={i} className="acr-infographic-item">
                <i className={"flaticon-" + item.icon + ""} />
                <div className="acr-infographic-item-body">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <Link
                    to={item.btnurl}
                    className="btn-custom secondary btn-sm"
                  >
                    {item.btntext}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
