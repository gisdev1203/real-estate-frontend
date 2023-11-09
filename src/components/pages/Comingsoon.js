import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Content from "../sections/comingsoon/Content";

class Comingsoon extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Coming Soon</title>
          <meta name="description" content="#" />
        </Helmet>
        <Content />
      </Fragment>
    );
  }
}

export default Comingsoon;
