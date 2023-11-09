import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Userbreadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/profile-listings/Content";

class Profilelistings extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | My Listings</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Breadcrumb />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Profilelistings;
