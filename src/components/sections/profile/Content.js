import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sidebar sticky-sidebar user-nav sidebar-left">
                                <ul>
                                    <li> <Link className="active" to="/profile"> Edit Profile</Link> </li>
                                    <li> <Link to="/profile-listings">My Listings</Link> </li>
                                    <li> <Link to="/profile-saved-listings">Saved Listings</Link> </li>
                                    <li> <Link className="logout" to="/"><i className="flaticon-shut-down-button" /> Logout</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="acr-welcome-message">
                                <h3>Welcome Back, Randy Blue</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Randy Blue" defaultValue="Randy Blue" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="randydandy" defaultValue="randydandy" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" placeholder="randy_blue@hotmail.com" defaultValue="randy_blue@hotmail.com" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label>Phone Number</label>
                                        <input type="text" className="form-control" placeholder="+123 456 789" defaultValue="+123 456 789" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label>Address One</label>
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label>Address Two</label>
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label>About Me</label>
                                        <textarea name="about" rows={4} className="form-control" placeholder="About Me" />
                                    </div>
                                </div>
                                <button type="submit" name="submit" className="btn-custom">Save Changes</button>
                            </form>
                            <hr />
                            <div className="acr-welcome-message">
                                <h3>Security</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label>Repeat Password</label>
                                        <input type="password" className="form-control" placeholder="Repeat Password" />
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label>Upload Your ID</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="propertyThumbnail" />
                                            <label className="custom-file-label" htmlFor="propertyThumbnail">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn-custom">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;