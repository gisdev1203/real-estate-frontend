import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="section bg-norepeat bg-bottom" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png)" }}>
                <div className="container">
                    <div className="section-404">
                        <div className="section-404-text mb-0">
                            <h1 className="title">Error 404</h1>
                            <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <Link to="/" className="btn-custom">Go back Home</Link>
                        </div>
                    </div>
                </div>
                <div className="acr-clouds">
                    <div className="cloud-one" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/cloud1.png)" }} />
                    <div className="cloud-two" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/cloud2.png)" }} />
                    <div className="cloud-three" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/cloud3.png)" }} />
                    <div className="cloud-four" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/cloud4.png)" }} />
                    <div className="cloud-five" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/cloud5.png)" }} />
                </div>
            </div>
        );
    }
}

export default Content;