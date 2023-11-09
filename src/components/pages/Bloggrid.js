import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/bloggrid/Content";

const Bloggrid = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Blog Grid</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Blog Grid" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Bloggrid;
