import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/listing-details-v2/Content";

class Listingdetailstwo extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Listing Details</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Listingdetailstwo;
