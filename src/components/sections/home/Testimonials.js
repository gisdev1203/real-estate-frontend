import React from "react";
import testimonial from "../../../data/testimonial.json";
import { processRatingStars } from "../../../helper/helper";

const Testimonials = () => {
  return (
    <div className="section section-padding">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Testimonials</h5>
          <h2 className="title">What Are People Saying</h2>
        </div>
        <div className="row">
          {/* Testimonail item start */}
          {testimonial.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4 col-md-12">
              <div className="acr-testimonial">
                <div className="acr-testimonial-body">
                  <h5>{item.title}</h5>
                  <div className="acr-rating-wrapper">
                    <div className="acr-rating">
                      {processRatingStars(item.rating)}
                    </div>
                  </div>
                  <p>{item.comment}</p>
                </div>
                <div className="acr-testimonial-author">
                  <img
                    src={process.env.PUBLIC_URL + "/" + item.authorimg}
                    alt="testimonial"
                  />
                  <div className="acr-testimonial-author-inner">
                    <h6>{item.author}</h6>
                    <span>{item.post}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Testimonail item end */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
