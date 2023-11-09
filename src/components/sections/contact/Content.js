import React, { Component, Fragment } from 'react';
import Contactform from './Contactform';
import Contactinfo from './Contactinfo';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Contactinfo/>
                <Contactform/>
            </Fragment>
        );
    }
}

export default Content;