import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/faq/Content";

class Faq extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | FAQ's</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "FAQ's" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Faq;
