import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headerfive";
import Content from "../sections/listingmap/Content";

class Listingmap extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Listing Map</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Content />
      </Fragment>
    );
  }
}

export default Listingmap;
