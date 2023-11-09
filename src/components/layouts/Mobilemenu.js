import React from "react";
import { Link } from "react-router-dom";
import navigation from "../../data/navigation.json";

const Mobilemenu = () => {
  const triggerChild = (e) => {
    let subMenu = "";
    subMenu =
      this.getNextSibling(e.target, ".submenu") !== undefined
        ? this.getNextSibling(e.target, ".submenu")
        : null;
    if (subMenu !== null && subMenu !== undefined && subMenu !== "") {
      subMenu.classList = subMenu.classList.contains("d-block")
        ? "submenu"
        : "submenu d-block";
    }
  };

  return (
    <div className="aside-scroll">
      <ul>
        {/* Pages Start */}
        <li className="menu-section-title">Pages</li>
        {navigation.length > 0
          ? navigation.map((item, i) => (
              <li
                key={i}
                className={`menu-item ${
                  item.child ? "menu-item-has-children" : ""
                } `}
                onClick={() => triggerChild}
              >
                {item.child ? (
                  <Link onClick={(e) => e.preventDefault()} to="/">
                    {" "}
                    <i className={"flaticon-" + item.icon + ""} />{" "}
                    {item.linkText}{" "}
                  </Link>
                ) : (
                  <Link to={item.link}>
                    {" "}
                    <i className={"flaticon-" + item.icon + ""} />{" "}
                    {item.linkText}{" "}
                  </Link>
                )}
                {item.child ? (
                  <ul className="submenu" role="menu">
                    {item.submenu.map((sub_item, i) => (
                      <li
                        key={i}
                        className={`menu-item ${
                          sub_item.child ? "menu-item-has-children" : ""
                        } `}
                      >
                        {sub_item.child ? (
                          <Link onClick={(e) => e.preventDefault()} to="/">
                            {" "}
                            {sub_item.linkText}{" "}
                          </Link>
                        ) : (
                          <Link to={sub_item.link}> {sub_item.linkText} </Link>
                        )}
                        {sub_item.submenu ? (
                          <ul className="submenu">
                            {sub_item.submenu.map((third_item, i) => (
                              <li className="menu-item" key={i}>
                                <Link to={third_item.link}>
                                  {third_item.linkText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))
          : null}
        {/* Pages End */}
        {/* Social Media Start */}
        <li className="menu-section-title">Get Social</li>
        <li className="menu-item">
          {" "}
          <Link to="#">
            {" "}
            <i className="flaticon-facebook" />
            Facebook
          </Link>{" "}
        </li>
        <li className="menu-item">
          {" "}
          <Link to="#">
            {" "}
            <i className="flaticon-linkedin" /> Linkedin{" "}
          </Link>{" "}
        </li>
        <li className="menu-item">
          {" "}
          <Link to="#">
            {" "}
            <i className="flaticon-twitter" /> Twitter{" "}
          </Link>{" "}
        </li>
        <li className="menu-item">
          {" "}
          <Link to="#">
            {" "}
            <i className="flaticon-instagram" /> Instagram{" "}
          </Link>{" "}
        </li>
        {/* Social Media End */}
      </ul>
    </div>
  );
};

export default Mobilemenu;
