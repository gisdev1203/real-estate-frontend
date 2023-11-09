import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Listings from "../hometwo/Listings";
import Blockcta from "../../layouts/Blockcta";
import Whyus from "../homethree/Whyus";
import Toplistings from "../home/Toplistings";
import Recentlistings from "./Recentlistings";
import Latestblog from "../home/Latestblog";
import Faqs from "./Faqs";
import Agentsslider from "../home/Agentsslider";
import Bluecta from "../../layouts/Bluecta";
import Testimonials from "../home/Testimonials";

const Content = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Listings />
      <div className="section section-padding pt-0">
        <Blockcta />
      </div>
      <div className="acr-footer footer-2">
        <Whyus />
      </div>
      <Toplistings />
      <Recentlistings />
      <Latestblog />
      <Faqs />
      <Agentsslider />
      <div className="section pt-0">
        <Bluecta />
      </div>
      <Testimonials />
    </div>
  );
};

export default Content;
