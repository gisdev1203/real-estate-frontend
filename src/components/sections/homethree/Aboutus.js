import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <div className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 acr-single-img-wrapper mb-lg-30">
                        <div className="section-title-wrap section-header acr-dots-wrapper">
                            <h2 className="title">We Advertise Houses That Sell</h2>
                            <div className="acr-dots" />
                        </div>
                        <img src={process.env.PUBLIC_URL + "/assets/img/listings-list/6.jpg"} alt="listing" />
                    </div>
                    <div className="col-lg-6 acr-single-img-wrapper">
                        <div className="section-title-wrap">
                            <img src={process.env.PUBLIC_URL + "/assets/img/about/1.jpg"} alt="listing" />
                            <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <Link to="/listing-map" className="btn-link custom-primary">Browse Listings <i className="fas fa-arrow-right" /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;