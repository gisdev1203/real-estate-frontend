import React from "react";
import { Helmet } from "react-helmet";
import Header from "../layouts/Headerfour";
import Footer from "../layouts/Footerthree";
import Content from "../sections/homefour/Content";

const Homefour = () => {
  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Homepage</title>
        <meta name="description" content="#" />
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Homefour;
