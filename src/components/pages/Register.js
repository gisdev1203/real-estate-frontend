import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headerfive";
import Content from "../sections/register/Content";

const Register = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Register</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Content />
    </Fragment>
  );
};

export default Register;
