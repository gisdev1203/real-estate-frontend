import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";

const whyusblock = [
  {
    id: 1,
    icon: faHandHoldingDollar,
    text: "Price is below Market value",
    title: "Low Price ",
  },
  {
    id: 2,
    icon: faHandshake,
    text: "Specialize in Distress property -  Our property either NPL, Bank own, or foreclosure",
    title: "Specialization ",
  },
  {
    id: 3,
    icon: faUsersLine,
    text: "Professional team of staff since 2003",
    title: "Professinal Team",
  },
  {
    id: 4,
    icon: faPeopleGroup,
    text: "More than 5000 real estate agent world-wide",
    title: "Big Network",
  },
  {
    id: 5,
    icon: faHandshake,
    title: "Fast Loans",
    text: "Get loan loans approved and close deal faster",
  },
];

const Whyus = () => {
  return (
    <div className="section section-padding infographics-3">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Our Moto</h5>
          <h2 className="title">WHY CHOOSE TO WORK WITH US</h2>
        </div>
        <div className="row">
          {whyusblock.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="acr-infographic-item">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={item.icon}
                    color="#38B2Ac"
                    className="h-10 px-4"
                  />
                  <div className="acr-infographic-item-body">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyus;
