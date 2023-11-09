import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Location extends Component {
    render() {
        return (
            <div className="section section-padding bg-norepeat bg-bottom light-bg" style={{ backgroundImage: 'url("assets/img/misc/bldg.png")' }}>
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Find Your Paradise</h5>
                        <h2 className="title">Browse By Type</h2>
                    </div>
                    <div className="row masonry">
                        <div className="col-lg-6 masonry-item">
                            <div className="acr-country-item acr-country-item-lg">
                                <div className="acr-country-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/countries/6.jpg"} alt="country" />
                                </div>
                                <Link to="/listing-map" className="acr-country-content">
                                    <h4>Home</h4>
                                    <span>128 Listings starting at 1,999$</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 masonry-item">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/2.jpg"} alt="country" />
                                        </div>
                                        <Link to="/listing-map" className="acr-country-content">
                                            <h6>Condo</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/3.jpg"} alt="country" />
                                        </div>
                                        <Link to="/listing-map" className="acr-country-content">
                                            <h6>Apartment</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/4.jpg"} alt="country" />
                                        </div>
                                        <Link to="/listing-map" className="acr-country-content">
                                            <h6>Hotel</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/1.jpg"} alt="country" />
                                        </div>
                                        <Link to="/listing-map" className="acr-country-content">
                                            <h6>Land</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;