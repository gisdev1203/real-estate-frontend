import React, { Component, Fragment } from 'react';
import Categories from '../hometwo/Categories';
import Aboutus from '../hometwo/About';
import Banner from './Banner';
import Listings from '../hometwo/Listings';
import Blockcta from '../../layouts/Blockcta';
import Services from '../hometwo/Services';
import Blogblock from '../hometwo/Blogblock';
import Contactform from './Contactform';

// class Content extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <Banner/>
//                 <Aboutus/>
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

const Content = () => {
    return (
        <Fragment>
            <Banner/>
            <Aboutus/>
            <Categories/>
            <Listings/>
            <div className="section section-padding pt-0">
                <Blockcta/>
            </div>
            <Services/>
            <Blogblock/>
            <Contactform/>
        </Fragment>
    )
}

export default Content;