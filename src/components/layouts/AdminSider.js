import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import $ from "jquery";

import "./AdminSider.css";

const AdminSider = (props) => {
  useEffect(() => {
    $(".menu-item:first").css("color", "#d1d1d1");
    $(".menu-item.active").removeClass("active");
    $(".menu-item[href='" + props.url + "']").addClass("active");
  });

  return (
    <Menu>
      <Link className="menu-item" to="/admin">
        Home
      </Link>
      <Link className="menu-item" to="/admin/users">
        User
      </Link>
      <Link className="menu-item" to="/admin/categories">
        Category
      </Link>
      <Link className="menu-item" to="/admin/properties">
        Property
      </Link>
      <Link className="menu-item" to="/admin/currencies">
        Currency
      </Link>
      <Link className="menu-item" to="/admin/features">
        Feature
      </Link>
      <Link className="menu-item" to="/admin/locations">
        Location
      </Link>
      <Link className="menu-item" to="/admin/nearbytypes">
        Near Type
      </Link>
      <Link className="menu-item" to="/admin/faqs">
        FAQ Manage
      </Link>
    </Menu>
  );
};

export default AdminSider;
