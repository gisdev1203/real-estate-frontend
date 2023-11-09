import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/listinggrid/Content";

class Listinggrid extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Listing Grid</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "Listing Grid" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Listinggrid;
