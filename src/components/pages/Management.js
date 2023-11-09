import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/services/Content";

const Management = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Property Management</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Property Management" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Management;
