import React, { Component } from 'react';

class Formbox extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-md-12 form-group">
                        <label>Your Message</label>
                        <textarea className="form-control" placeholder="Type your message..." name="comment" rows={7} />
                    </div>
                </div>
                <button type="submit" className="btn-custom primary" name="button">Send Message</button>
            </form>
        );
    }
}

export default Formbox;