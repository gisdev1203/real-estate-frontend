import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/pricing/Content";

const Agent = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Agent Archive</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Agent Archive" }} />
      <Content />
      <Footerthree />
    </Fragment>
  );
};

export default Agent;
