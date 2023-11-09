import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/rent/Content";

const Pricing = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Pricing</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Rent" }} />

      <Content />
      <Footerthree />
    </Fragment>
  );
};

export default Pricing;
