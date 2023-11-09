import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../layouts/Blogsidebar";
import Data from "../../../data/blog";
import $ from "jquery";
import "magnific-popup";

class Content extends Component {
  componentDidMount() {
    function popup() {
      $(".gallery-thumb").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }
    popup();
  }
  render() {
    const { blogblock, blogcomment } = Data;
    return (
      <div className="section blog-wrapper">
        <div className="container">
          <div className="row">
            {/* Post Start */}
            <div className="col-lg-8">
              {/* Content Start */}
              <article className="post-single">
                <div className="post-meta">
                  <span>
                    {" "}
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/people/1.jpg"}
                      alt="author"
                    />{" "}
                    <Link to="#">Randy Blue</Link>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="far fa-calendar" />{" "}
                    <Link to="#">March 3, 2020</Link>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="far fa-folder" />{" "}
                    <Link to="#">Real Estate</Link>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fas fa-hashtag" /> <Link to="#">Rental</Link>,{" "}
                    <Link to="#">Flat</Link>{" "}
                  </span>
                </div>
                <div className="post-thumbnail">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blog/5.jpg"}
                    alt="post"
                  />
                </div>
                <div className="post-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <h4>Into the subject</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                    <Link to="#">Lorem Ipsum has been the industry's</Link>{" "}
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blog/4.jpg"}
                    alt="post"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                  <blockquote>
                    <h5>Real estate is booming</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </blockquote>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Link
                        to="assets/img/blog/9.jpg"
                        className="gallery-thumb"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/img/blog/9.jpg"
                          }
                          alt="post"
                        />
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="assets/img/blog/7.jpg"
                        className="gallery-thumb"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/img/blog/7.jpg"
                          }
                          alt="post"
                        />
                      </Link>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </article>
              {/* Content End */}
              {/* Pagination Start */}
              <div className="section pb-0 post-single-pagination-wrapper">
                <div className="post-single-pagination post-prev">
                  <i className="fas fa-arrow-left" />
                  <Link to="#" className="post-single-pagination-content">
                    <span>Prev Post</span>
                    <h6>How to enable better agents in an agency</h6>
                  </Link>
                </div>
                <div className="post-single-pagination post-next">
                  <Link to="#" className="post-single-pagination-content">
                    <span>Next Post</span>
                    <h6>Real estate is booming in the west and east</h6>
                  </Link>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
              {/* Pagination Start */}
              {/* Related Posts Start */}
              <div className="section section-padding">
                <h4>Related Posts</h4>
                <div className="row">
                  {blogblock.slice(0, 2).map((item, i) => (
                    <div key={i} className="col-md-6">
                      <article className="post single">
                        <div className="post-thumbnail">
                          <Link to="/blog-single">
                            <img
                              src={process.env.PUBLIC_URL + "/" + item.gridimg}
                              alt="blog post"
                            />
                          </Link>
                        </div>
                        <div className="post-body">
                          <div className="post-author">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/" + item.authorimg
                              }
                              alt="author"
                            />
                            <div className="post-author-body">
                              <p>
                                {" "}
                                <Link to="#">{item.authorname}</Link>{" "}
                              </p>
                              <span className="post-date">{item.postdate}</span>
                            </div>
                          </div>
                          <h5 className="post-title">
                            {" "}
                            <Link to="/blog-single">{item.title}</Link>{" "}
                          </h5>
                          <p className="post-text">{item.text.slice(0, 75)}</p>
                          <div className="post-controls">
                            <Link
                              to="/blog-single"
                              className="btn-custom secondary btn-sm"
                            >
                              Read More
                            </Link>
                            <div className="post-comment-authors">
                              {item.totalcomment > 0 ||
                              item.totalcomment !== "" ? (
                                <Fragment>
                                  <span>Comments by: </span>
                                  <div className="post-comment-authors-img">
                                    {item.usercomment.map((item, i) => (
                                      <Link key={i} to="#">
                                        {" "}
                                        <img
                                          src={
                                            process.env.PUBLIC_URL +
                                            "/" +
                                            item.img
                                          }
                                          alt="comment author"
                                        />{" "}
                                      </Link>
                                    ))}
                                    <Link to="#"> +{item.totalcomment} </Link>
                                  </div>
                                </Fragment>
                              ) : (
                                <span>0 Comments</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              {/* Related Posts End */}
              {/* Comments Start */}
              <div className="comments-list section pt-0">
                <h4>2 Comments</h4>
                <ul>
                  {blogcomment.map((item, i) => (
                    <li key={i} className="comment-item">
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.userimg}
                        alt="comment author"
                      />
                      <div className="comment-body">
                        <h5>{item.username}</h5>
                        <span>Posted on: {item.commentdate}</span>
                        <p>{item.comment}</p>
                        <Link to="#" className="reply-link">
                          {" "}
                          Reply{" "}
                        </Link>
                      </div>
                      <ul>
                        {item.replies.map((item, i) => (
                          <li key={i} className="comment-item">
                            <img
                              src={process.env.PUBLIC_URL + "/" + item.userimg}
                              alt="comment author"
                            />
                            <div className="comment-body">
                              <h5>{item.username}</h5>
                              <span>Posted on: {item.commentdate}</span>
                              <p>{item.comment}</p>
                              <Link to="#" className="reply-link">
                                {" "}
                                Reply{" "}
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="comment-form section p-0">
                <h4>Leave a Reply</h4>
                <form method="post">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="fname"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <label>Your Message</label>
                      <textarea
                        className="form-control"
                        placeholder="Type your comment..."
                        name="comment"
                        rows={7}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="sendNotifications"
                        />
                        <label
                          className="custom-control-label fw-400"
                          htmlFor="sendNotifications"
                        >
                          Notify me when I receive a reply to my comment
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-custom primary"
                    name="button"
                  >
                    Post comment
                  </button>
                </form>
              </div>
              {/* Comments End */}
            </div>
            {/* Post End */}
            {/* Sidebar Start */}
            <div className="col-lg-4">
              <Sidebar />
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
