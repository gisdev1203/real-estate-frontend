import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/services/Content";

const Planner = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Investment Planner</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Investment Planner" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Planner;
