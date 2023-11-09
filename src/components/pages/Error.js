import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/error/Content";

class Error extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Error 404</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "Error 404" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Error;
