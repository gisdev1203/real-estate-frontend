import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/services/Content";

const Distress = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Acres - Real Estate React Template | Help With Distress Home
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Help With Distress Home" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Distress;
