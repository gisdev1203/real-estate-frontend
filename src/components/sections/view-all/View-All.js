import React, { Fragment } from "react";
import Header from "../../layouts/Header";
import Breadcrumb from "../../layouts/Breadcrumb";
import { Helmet } from "react-helmet";
import Content from "./Content";

const View = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | View All</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Veiw All" }} />
      <Content />
    </Fragment>
  );
};

export default View;
