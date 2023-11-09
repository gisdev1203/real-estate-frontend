import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Data from "../../data/blog";

const Blogsidebar = () => {
  const { blogblock, blogcategory } = Data;

  console.log();
  return (
    <div className="sidebar">
      <div className="sidebar-widget">
        <form method="post">
          <h5>Search Posts</h5>
          <div className="search-wrapper">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="sidebar-search"
            />
            <button type="submit" className="btn-custom">
              <i className="flaticon-search" />
            </button>
          </div>
        </form>
      </div>
      <div className="sidebar-widget">
        <h5>Recent Posts</h5>
        {blogblock
          .filter(function (item) {
            return item.recent === true;
          })
          .slice(0, 4)
          .map((item, i) => (
            <article key={i} className="media">
              <Link to="/blog-single">
                <img
                  src={process.env.PUBLIC_URL + "/" + item.gridimg}
                  alt="post"
                />
              </Link>
              <div className="media-body">
                <h6>
                  {" "}
                  <Link to="/blog-single">{item.title}</Link>{" "}
                </h6>
                <span>{item.postdate}</span>
              </div>
            </article>
          ))}
      </div>
      <div className="sidebar-widget sidebar-list">
        <h5>Popular Categories</h5>
        <ul>
          {blogcategory.map((item, i) => (
            <li key={i}>
              <Link to="/blog-single">
                {" "}
                {item.title} <span>({item.count})</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-widget tags">
        <h5>Popular Tags</h5>
        {blogblock.map((item, i) => (
          <Fragment key={i}>
            {item.tagslist.map((item, i) => (
              <Link key={i} to="/blog-single">
                {item.title}
              </Link>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Blogsidebar;
