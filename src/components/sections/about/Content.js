// import React, { Component, Fragment } from 'react';
// import Agentsslider from '../home/Agentsslider';
// import Testimonials from '../home/Testimonials';
// import About from '../hometwo/About';
// import Counter from './Counter';
// import Video from './Video';

// class Content extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <About />
//                 <Counter />
//                 <div className="section pb-0">
//                     <Agentsslider />
//                 </div>
//                 <Video />
//                 <Testimonials />
//             </Fragment>
//         );
//     }
// }

// export default Content;

//////////////////////////////////////////////////////     Functional  Component  //////////////////////////////////////////////////////////////////

import React, { Fragment } from "react";
import Agentsslider from "../home/Agentsslider";
import Testimonials from "../home/Testimonials";
import About from "../hometwo/About";
import Counter from "./Counter";
import Video from "./Video";

const Content = () => {
  return (
    <Fragment>
      <About />
      <Counter />
      <div className="section pb-0">
        <Agentsslider />
      </div>
      <Video />
      <Testimonials />
    </Fragment>
  );
};

export default Content;
