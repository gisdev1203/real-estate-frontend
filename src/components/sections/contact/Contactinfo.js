import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contactinfo from '../../../data/contactinfo.json';

class Contactinfo extends Component {
    render() {
        return (
            <div className="section section-padding infographics-3">
                <div className="container">
                    <div className="row">
                        {contactinfo.map((item, i) => (
                            <div key={i} className="col-lg-4">
                                <div className="acr-infographic-item">
                                    <i className={"flaticon-" + item.icon + ""} />
                                    <div className="acr-infographic-item-body">
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                        <Link to={item.btnurl} className="btn-custom secondary btn-sm">{item.btntext}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactinfo;