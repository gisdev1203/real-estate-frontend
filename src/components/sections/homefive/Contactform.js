import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formbox from '../../layouts/Formbox';
import contactinfo from '../../../data/contactinfo.json';

class Contactform extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Contact Us</h5>
                        <h2 className="title">Get In Touch</h2>
                    </div>
                    <div className="comment-form section-title-wrap section-header">
                        <Formbox />
                    </div>
                    <div className="row infographics-5">
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

export default Contactform;