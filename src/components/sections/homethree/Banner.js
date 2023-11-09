import React, { Component } from 'react';
import { locationlist, statuslist, pricerangelist } from '../../../data/select.json';
import Select2 from 'react-select2-wrapper';

class Banner extends Component {
    render() {
        return (
            <div className="banner banner-1 bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/15.jpg )" }}>
                <div className="container">
                    <div className="banner-item">
                        <div className="banner-inner">
                            <div className="banner-text">
                                <h1 className="title">Real Estate Agents Near You</h1>
                                <p className="subtitle">Thousands of people have their flats up for grabs. Don't miss your chance to grab your own house today.</p>
                            </div>
                            <div className="acr-filter-form">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group acr-custom-select">
                                                <label>Type: </label>
                                                <Select2 data={locationlist} options={{
                                                    placeholder: 'Any Location',
                                                }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group acr-custom-select">
                                                <label>Status: </label>
                                                <Select2 data={statuslist} options={{
                                                    placeholder: 'Any Status',
                                                }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group acr-custom-select">
                                                <label>Price Range: </label>
                                                <Select2 data={pricerangelist} options={{
                                                    placeholder: 'Any Range',
                                                }} />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-2 col-md-6">
                                            <div className="form-group">
                                                <button type="submit" className="btn-custom btn-block" >Search listings</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;