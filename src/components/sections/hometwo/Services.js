import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/services.json';

class Services extends Component {
    render() {
        return (
            <div className="section light-bg infographics-2 bg-norepeat bg-bottom" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png )" }}>
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Services</h5>
                        <h2 className="title">You Need It, We Got It</h2>
                    </div>
                    <div className="row">
                        {serviceblock.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="acr-infographic-item">
                                    <i className={"flaticon-" + item.icon + ""} />
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                    <Link to="#"> <span>Get Started</span> <i className="fas fa-chevron-right" /> </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;