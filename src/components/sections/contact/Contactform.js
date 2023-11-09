import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contactform extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-30">
                            <div className="acr-locations bg-bottom bg-norepeat" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png)" }}>
                                <img src={process.env.PUBLIC_URL + "/assets/img/contact.jpg"} alt="" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>New York</h5>
                                            <h5>USA</h5>
                                            <div className="acr-location-address">
                                                <p>Cecilia Chapman 711-2880 Nulla St.</p>
                                                <Link to="tel:+123456789">(478) 339 120</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Tbilsi</h5>
                                            <h5>Georgia</h5>
                                            <div className="acr-location-address">
                                                <p>Aaron Hawkins 5587 Nunc. Avenue</p>
                                                <Link to="tel:+123456789">(134) 984 438</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Moscow</h5>
                                            <h5>Russia</h5>
                                            <div className="acr-location-address">
                                                <p>Lawrence Moreno 935-9940 Tortor. Street</p>
                                                <Link to="tel:+123456789">(443) 893 109</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Cairo</h5>
                                            <h5>Egypt</h5>
                                            <div className="acr-location-address">
                                                <p>Aaron Hawkins 5587 Nunc. Avenue</p>
                                                <Link to="tel:+123456789">(009) 338 148</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Contact Us</h5>
                                <h2 className="title">Got Any Questions?</h2>
                            </div>
                            <div className="comment-form">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label>Your Message</label>
                                            <textarea className="form-control" placeholder="Type your message..." name="comment" rows={7} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-custom primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;