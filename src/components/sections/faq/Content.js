import React, { Component } from 'react';
import { Tab, Nav, Accordion, Card, NavLink } from 'react-bootstrap';
import Sidebar from '../../layouts/Blogsidebar';
import Formbox from '../../layouts/Formbox';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Tab.Container defaultActiveKey="general">
                                <Nav variant="tabs" className="nav nav-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="general">General</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="listings">Listings</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="general">
                                        <Accordion defaultActiveKey="0" className="with-gap">
                                            <Card>
                                                <Accordion.Collapse eventKey="0" className="collapseparent">
                                                    <Card.Body>
                                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Square Scacco Diamond Ring truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                        tempor,
                                                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.
                                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                        heard of them accusamus labore sustainable VHS.
                                        </p>
                                                        <ul className="acr-list mb-0">
                                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. </li>
                                                            <li> Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum </li>
                                                            <li> There are many variations of passages of Lorem Ipsum </li>
                                                            <li> Internet tend to repeat predefined chunks as necessary </li>
                                                            <li> Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                                                        How can I start with buying a home?
                                            </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                            <Card>
                                                <Accordion.Collapse eventKey="1" className="collapseparent">
                                                    <Card.Body>
                                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Square Scacco Diamond Ring truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                        tempor,
                                                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.
                                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                        heard of them accusamus labore sustainable VHS.
                                        </p>
                                                        <ul className="acr-list mb-0">
                                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. </li>
                                                            <li> Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum </li>
                                                            <li> There are many variations of passages of Lorem Ipsum </li>
                                                            <li> Internet tend to repeat predefined chunks as necessary </li>
                                                            <li> Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                                                        Is the service free?
                                            </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                            <Card>
                                                <Accordion.Collapse eventKey="2" className="collapseparent">
                                                    <Card.Body>
                                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Square Scacco Diamond Ring truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                        tempor,
                                                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.
                                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                        heard of them accusamus labore sustainable VHS.
                                        </p>
                                                        <ul className="acr-list mb-0">
                                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. </li>
                                                            <li> Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum </li>
                                                            <li> There are many variations of passages of Lorem Ipsum </li>
                                                            <li> Internet tend to repeat predefined chunks as necessary </li>
                                                            <li> Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                                                        How many agents can I have at once?
                                            </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="listings">
                                        <Accordion defaultActiveKey="10" className="with-gap">
                                            <Card>
                                                <Accordion.Collapse eventKey="10" className="collapseparent">
                                                    <Card.Body>
                                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Square Scacco Diamond Ring truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                        tempor,
                                                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.
                                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                        heard of them accusamus labore sustainable VHS.
                                        </p>
                                                        <ul className="acr-list mb-0">
                                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. </li>
                                                            <li> Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum </li>
                                                            <li> There are many variations of passages of Lorem Ipsum </li>
                                                            <li> Internet tend to repeat predefined chunks as necessary </li>
                                                            <li> Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="10">
                                                        How can I submit my product?
                                            </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                            <Card>
                                                <Accordion.Collapse eventKey="11" className="collapseparent">
                                                    <Card.Body>
                                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Square Scacco Diamond Ring truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                        tempor,
                                                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.
                                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                        heard of them accusamus labore sustainable VHS.
                                        </p>
                                                        <ul className="acr-list mb-0">
                                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. </li>
                                                            <li> Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum </li>
                                                            <li> There are many variations of passages of Lorem Ipsum </li>
                                                            <li> Internet tend to repeat predefined chunks as necessary </li>
                                                            <li> Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="11">
                                                        For how long does my product stay posted?
                                            </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                            <Card>
                                                <Accordion.Collapse eventKey="12" className="collapseparent">
                                                    <Card.Body>
                                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Square Scacco Diamond Ring truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                        tempor,
                                                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.
                                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                        heard of them accusamus labore sustainable VHS.
                                        </p>
                                                        <ul className="acr-list mb-0">
                                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. </li>
                                                            <li> Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum </li>
                                                            <li> There are many variations of passages of Lorem Ipsum </li>
                                                            <li> Internet tend to repeat predefined chunks as necessary </li>
                                                            <li> Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="12">
                                                        Can I submit products for free?
                                            </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                            {/* Contact Form Start */}
                            <div className="section pb-0">
                                <div className="section-title-wrap section-header">
                                    <h5 className="custom-primary">Contact Us</h5>
                                    <h2 className="title">Still Got Questions?</h2>
                                    <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <div className="comment-form">
                                    <Formbox />
                                </div>
                            </div>
                            {/* Contact Form End */}
                        </div>
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;