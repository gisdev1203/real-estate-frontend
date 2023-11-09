import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/EstateContent";
import Download from "../layouts/App";

const Estate = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Acres - Real Estate React Template | Thailand real estate laws
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Thailand real estate laws" }} />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Estate;
