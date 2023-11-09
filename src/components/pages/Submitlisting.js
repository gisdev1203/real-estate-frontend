/////////////////////     Functional Component ////////////////////////////
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/submit-listing/Content";

const Submitlisting = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Submit Listing</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Submit Listing" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Submitlisting;
