import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="footer-top">
                <div className="container">
                    <div className="row footer-btn-wrapper">
                        <div className="col-lg-7 footer-widget">
                            <h4>Download Our App</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                        <div className="col-lg-5 col-md-12 footer-widget">
                            <div className="footer-btn">
                                <Link to="#" className="btn-custom-2 grey"> <i className="flaticon-playstore" />Google Play</Link>
                                <Link to="#" className="btn-custom-2 grey"> <i className="flaticon-apple" />App Store</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;