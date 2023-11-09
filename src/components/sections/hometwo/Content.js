import React, { Component, Fragment } from "react";
import Blockcta from "../../layouts/Blockcta";
import About from "./About";
import Banner from "./Banner";
import Blogblock from "./Blogblock";
import Categories from "./Categories";
import Contactform from "./Contactform";
import Listings from "./Listings";
import Services from "./Services";

const Content = () => {
  return (
    <Fragment>
      <Banner />
      <About />
      <Categories />
      <Listings />
      <div className="section section-padding pt-0">
        <Blockcta />
      </div>
      <Services />
      <Blogblock />
      <Contactform />
    </Fragment>
  );
};

export default Content;

// import React, { Component, Fragment } from 'react';
// import Blockcta from '../../layouts/Blockcta';
// import About from './About';
// import Banner from './Banner';
// import Blogblock from './Blogblock';
// import Categories from './Categories';
// import Contactform from './Contactform';
// import Listings from './Listings';
// import Services from './Services';

// class Content extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <Banner/>
//                 <About/>
//                 <Categories/>
//                 <Listings/>
//                 <div className="section section-padding pt-0">
//                     <Blockcta/>
//                 </div>
//                 <Services/>
//                 <Blogblock/>
//                 <Contactform/>
//             </Fragment>
//         );
//     }
// }

// export default Content;
