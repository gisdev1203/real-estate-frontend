import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/RetireContent";
import Download from "../layouts/App";

const Retire = () => (
  <Fragment>
    <Helmet>
      <title>
        Acres - Real Estate React Template | How to retire in Thailand
      </title>
      <meta name="description" content="#" />
    </Helmet>
    <Header />
    <Breadcrumb breadcrumb={{ pagename: "How to retire in Thailand" }} />

    <Content />
    <Download />
    <Footerthree />
  </Fragment>
);

export default Retire;
