import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/services/Content";

const Services = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Services</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Services" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Services;
