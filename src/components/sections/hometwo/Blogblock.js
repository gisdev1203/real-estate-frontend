import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Data from "../../../data/blog.json";

const Blogblock = () => {
  const blogblock = Data.blogblock;

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="section-title-wrap section-header flex-header">
          <div className="section-title-text">
            <h5 className="custom-primary">Latest News</h5>
            <h2 className="title">From Our Blog</h2>
          </div>
          <Link to="/blog-grid" className="btn-custom">
            View All
          </Link>
        </div>
        <div className="row masonry">
          {/* Post Start */}
          {blogblock.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4 masonry-item">
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
                      src={process.env.PUBLIC_URL + "/" + item.authorimg}
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
                      {item.totalcomment > 0 || item.totalcomment !== "" ? (
                        <Fragment>
                          <span>Comments by: </span>
                          <div className="post-comment-authors-img">
                            {item.usercomment.map((item, i) => (
                              <Link key={i} to="#">
                                {" "}
                                <img
                                  src={process.env.PUBLIC_URL + "/" + item.img}
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
          {/* Post End */}
        </div>
      </div>
    </div>
  );
};

export default Blogblock;

// import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { blogblock } from '../../../data/blog.json';

// class Blogblock extends Component {
//     render() {
//         return (
//             <div className="section section-padding">
//                 <div className="container">
//                     <div className="section-title-wrap section-header flex-header">
//                         <div className="section-title-text">
//                             <h5 className="custom-primary">Latest News</h5>
//                             <h2 className="title">From Our Blog</h2>
//                         </div>
//                         <Link to="/blog-grid" className="btn-custom">View All</Link>
//                     </div>
//                     <div className="row masonry">
//                         {/* Post Start */}
//                         {blogblock.slice(0, 3).map((item, i) => (
//                             <div key={i} className="col-lg-4 masonry-item">
//                                 <article className="post single">
//                                     <div className="post-thumbnail">
//                                         <Link to="/blog-single"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="blog post" /></Link>
//                                     </div>
//                                     <div className="post-body">
//                                         <div className="post-author">
//                                             <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" />
//                                             <div className="post-author-body">
//                                                 <p> <Link to="#">{item.authorname}</Link> </p>
//                                                 <span className="post-date">{item.postdate}</span>
//                                             </div>
//                                         </div>
//                                         <h5 className="post-title"> <Link to="/blog-single">{item.title}</Link> </h5>
//                                         <p className="post-text">
//                                             {item.text.slice(0, 75)}
//                                         </p>
//                                         <div className="post-controls">
//                                             <Link to="/blog-single" className="btn-custom secondary btn-sm">Read More</Link>
//                                             <div className="post-comment-authors">
//                                                 {
//                                                     item.totalcomment > 0 || item.totalcomment !== '' ? <Fragment>
//                                                         <span>Comments by: </span>
//                                                         <div className="post-comment-authors-img">
//                                                             {item.usercomment.map((item, i) => (
//                                                                 <Link key={i} to="#"> <img src={process.env.PUBLIC_URL + "/" + item.img} alt="comment author" /> </Link>
//                                                             ))}
//                                                             <Link to="#"> +{item.totalcomment} </Link>
//                                                         </div>
//                                                     </Fragment> : <span>0 Comments</span>
//                                                 }
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </article>
//                             </div>
//                         ))}
//                         {/* Post End */}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Blogblock;
