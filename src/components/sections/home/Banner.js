import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Banner
const bannerpost = [
    {
        id: 1,
        img: 'assets/img/banner/1.jpg',
        price: 852000,
        emitime: 60,
        location: 'Iris Watson, Frederick Nebraska 20620',
        beds: 3,
        baths: 2,
        area: 2499,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'House',
        view: 'City View',
        size: '89 Acres',
        condition: 'Brand New'
    },
    {
        id: 2,
        img: 'assets/img/banner/2.jpg',
        price: 1200000,
        emitime: 60,
        location: 'Theodore Lowe, Azusa New York 39531',
        beds: 4,
        baths: 3,
        area: 3120,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'Duplex',
        view: 'Forest View',
        size: '180 Acres',
        condition: 'Brand New'
    },
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
        }
        return (
            <div className="banner banner-2">
                <Slider className="banner-slider" ref={c => (this.slider = c)} {...settings}>
                    {bannerpost.map((item, i) => (
                        <div key={i} className="banner-item">
                            <div className="banner-inner bg-cover bg-center dark-overlay" style={{ backgroundImage: "url(" + item.img + ")" }} />
                            <div className="acr-listing-details">
                                <div className="acr-listing-section">
                                    <div className="acr-listing-nav">
                                        <Link to="/listing-details-v1" className="btn-custom secondary">See more details</Link>
                                    </div>
                                    <div className="acr-listing-section-body">
                                        <div className="acr-listing-section-price">
                                            <span>For Sale</span>
                                            <h3>${new Intl.NumberFormat().format((item.price).toFixed(2))}</h3>
                                            <span>Est. Mortgage</span>
                                            <p>${new Intl.NumberFormat().format((item.price / item.emitime).toFixed(2))}/mo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="acr-listing-section">
                                    <div className="acr-listing-section-body">
                                        <h4> <Link to="/listing-details-v1">{item.location}</Link> </h4>
                                        <div className="acr-listing-icons">
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-bedroom" />
                                                <span>Beds</span>
                                                <span className="acr-listing-icon-value">{item.beds}</span>
                                            </div>
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-bathroom" />
                                                <span>Baths</span>
                                                <span className="acr-listing-icon-value">{item.baths}</span>
                                            </div>
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-ruler" />
                                                <span>Sqft</span>
                                                <span className="acr-listing-icon-value">{new Intl.NumberFormat().format((item.area).toFixed(2))}</span>
                                            </div>
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <div className="acr-listing-section">
                                    <div className="acr-listing-controls">
                                        <Link to="#" className="acr-listing-control">
                                            <i className="flaticon-share" />
                                        </Link>
                                        <Link to="#" className="acr-listing-control">
                                            <i className="flaticon-star" />
                                        </Link>
                                        <Link to="#" className="acr-schedule-tour acr-listing-control">
                                            <i className="flaticon-event" />
                                            <span>Schedule Link tour</span>
                                        </Link>
                                    </div>
                                    <div className="acr-listing-section-body">
                                        <div className="acr-listing-meta">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Type</span>
                                                        <p>{item.type}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>View</span>
                                                        <p>{item.view}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Lot Size</span>
                                                        <p>{item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Condition</span>
                                                        <p>{item.condition}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="acr-arrows">
                    <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                    <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                </div>
            </div>
        );
    }
}

export default Banner;