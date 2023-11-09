import React, { Component } from 'react';
import Slider from 'react-slick';
import clients from '../../../data/clients.json'

class Clients extends Component {
    render() {
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        }
        return (
            <div className="container">
                <Slider className="clients-slider" {...settings}>
                    {clients.map((item, i) => (
                        <div key={i} className="acr-client-item text-center">
                            <img src={process.env.PUBLIC_URL + "/" + item.img} alt="client" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Clients;