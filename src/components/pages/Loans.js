import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/Finance/LoansContent";
import Download from "../layouts/App";

const Loans = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Acres - Real Estate React Template | Can you get a loans in Thailand
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb
        breadcrumb={{ pagename: "Can you get a loans in Thailand" }}
      />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Loans;
