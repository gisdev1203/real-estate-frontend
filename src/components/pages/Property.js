import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/PropertyContent";
import Download from "../layouts/App";

const Property = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | How to buy property in Thailand</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb
        breadcrumb={{ pagename: "How to buy property in Thailand" }}
      />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Property;
