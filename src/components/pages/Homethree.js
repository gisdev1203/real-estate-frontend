import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headerthree";
import Footer from "../layouts/Footer";
import Content from "../sections/homethree/Content";

class Homethree extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Acres - Real Estate React Template | Homepage</title>
          <meta name="description" content="#" />
        </Helmet>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Homethree;
