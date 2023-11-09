import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headerfive";
import Content from "../sections/login/Content";

const Login = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Acres - Real Estate React Template | Login</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Content />
    </Fragment>
  );
};

export default Login;
