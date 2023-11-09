import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headerfive";
import Verify from "../sections/register/Verify";

const RegisterVerify = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Register Verify</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Verify />
    </Fragment>
  );
};

export default RegisterVerify;
