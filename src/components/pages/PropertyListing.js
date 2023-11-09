import React from "react";
import Header from "../layouts/Header";
import Content from "../sections/PropertyListing/Content";
import Breadcrumb from "../layouts/Breadcrumb";
import { useParams } from "react-router-dom";

const PropertyListing = () => {
  const { type } = useParams();

  return (
    <div>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: `${type}` }} />
      <Content />
    </div>
  );
};

export default PropertyListing;
