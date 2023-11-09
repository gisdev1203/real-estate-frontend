import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Userbreadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/profile-saved-listings/Content";

class Profilesavedlistings extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
        <title>Acres - Real Estate React Template | My Products</title>
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

export default Profilesavedlistings;
