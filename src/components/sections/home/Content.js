import React, { Component, Fragment } from 'react';
import Bluecta from '../../layouts/Bluecta';
import Agentsslider from './Agentsslider';
import Banner from './Banner';
import Categories from './Categories';
import Latestblog from './Latestblog';
import Listingslider from './Listingslider';
import Singleagent from './Singleagent';
import Testimonials from './Testimonials';
import Toplistings from './Toplistings';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Categories/>
                <Listingslider/>
                <Toplistings/>
                <Singleagent/>
                <Agentsslider/>
                <Latestblog/>
                <Testimonials/>
                <div className="section pt-0">
                    <Bluecta/>
                </div>
            </Fragment>
        );
    }
}

export default Content;