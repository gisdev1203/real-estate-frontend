import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/sell/Content";

const Sell = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Sell</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Sell" }} />
      <Content />
      <Footerthree />
    </Fragment>
  );
};

export default Sell;
