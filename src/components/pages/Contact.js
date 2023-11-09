import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/contact/Content";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Contact Us</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "Contact Us" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Contact;
