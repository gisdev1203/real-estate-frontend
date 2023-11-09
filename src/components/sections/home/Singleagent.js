import React, { Component } from 'react';

class Singleagent extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="acr-single-agent">
                        <div className="acr-single-agent-thumb">
                            <img src={process.env.PUBLIC_URL + "/assets/img/person.png"} alt="agent" />
                            <div className="transparent-square">
                                <div />
                            </div>
                        </div>
                        <div className="acr-single-agent-body">
                            <h3>Agent Of The Month</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <div className="acr-single-agent-meta">
                                <h5>Jonathan Blue</h5>
                                <span>Agent at Company</span>
                            </div>
                            <div className="acr-rating">
                                <i className="fas fa-star active" />
                                <i className="fas fa-star active" />
                                <i className="fas fa-star active" />
                                <i className="fas fa-star active" />
                                <i className="fas fa-star active" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Singleagent;