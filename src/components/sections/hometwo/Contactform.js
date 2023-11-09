import React, { Component } from 'react';
import { Accordion, Card, NavLink } from 'react-bootstrap'
import Formbox from '../../layouts/Formbox';

class Contactform extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Contact Us</h5>
                        <h2 className="title">Get In Touch</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="comment-form mb-lg-30">
                                <Formbox/>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {/* FAQs Start */}
                            <Accordion defaultActiveKey="0" className="with-gap">
                                <Card>
                                    <Accordion.Collapse eventKey="0" className="collapseparent">
                                        <Card.Body>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Square Scacco
                                            Diamond Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                                            How can I submit my product?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="1" className="collapseparent">
                                        <Card.Body>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Square Scacco
                                            Diamond Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                                            For how long does my product stay posted?"
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="2" className="collapseparent">
                                        <Card.Body>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Square Scacco
                                            Diamond Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                                            Can I submit products for free?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Accordion>
                            {/* FAQs End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;