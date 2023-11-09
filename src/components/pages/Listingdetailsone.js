import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/listing-details-v1/Content";

const Listingdetailsone = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Listing Details</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <div style={{ marginBottom: "250px" }}></div>
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Listingdetailsone;
