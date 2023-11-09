import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/TermsContent";
import Download from "../layouts/App";

const Terms = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Acres - Real Estate React Template | Get a long terms visa in Thailand
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb
        breadcrumb={{ pagename: "Get a long terms visa in Thailand" }}
      />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Terms;
