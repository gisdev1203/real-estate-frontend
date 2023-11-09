import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../sections/blogsingle/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/blogsingle/Content";

class Blogsingle extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Blog Single</title>
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

export default Blogsingle;
