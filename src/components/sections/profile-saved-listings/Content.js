import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="sidebar sticky-sidebar user-nav sidebar-left">
                                <ul>
                                    <li> <Link to="/profile"> Edit Profile</Link> </li>
                                    <li> <Link to="/profile-listings">My Listings</Link> </li>
                                    <li> <Link className="active" to="/profile-saved-listings">Saved Listings</Link> </li>
                                    <li> <Link className="logout" to="/"><i className="flaticon-shut-down-button" /> Logout</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="acr-empty-section">
                                <i className="flaticon-home" />
                                <h3>You Haven't Saved Any Listings</h3>
                                <p>You still havent saved any listings yet, Go back to the listings page and check some of your favorite listings</p>
                                <Link to="/listing-map" className="btn-custom">Go to Listings</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;