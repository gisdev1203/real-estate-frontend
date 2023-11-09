import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSuccess: false
        }
    }
    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({
                fetchSuccess: true
            });
        });
    }
    render() {
        const hidden = this.state.fetchSuccess ? ' hidden' : '';
        return (
            <div className={`acr-preloader${hidden}`}>
                <div className="acr-preloader-inner">
                    <div className="lds-grid"><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                </div>
            </div>
        );
    }
}

export default Preloader;