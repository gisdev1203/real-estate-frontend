import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headertwo";
import Footer from "../layouts/Footertwo";
import Content from "../sections/hometwo/Content";

const Hometwo = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Homepage</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <div>asjhsjha</div>
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Hometwo;
