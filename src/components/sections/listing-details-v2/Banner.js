import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="subheader subheader-2 bg-cover bg-center dark-overlay" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/listing-single/1.jpg)" }}>
                <div className="container">
                    <div className="subheader-inner">
                        <span className="listing-badge rent">For Rent</span>
                        <h1 className="text-white">Iris Watson, Frederick Nebraska 20620</h1>
                        <span className="listing-address"> <i className="fas fa-map-marker-alt" /> Iris Watson P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620 </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;