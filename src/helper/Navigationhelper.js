import React, { Component, Fragment } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Nav toggle
      navtoggle: false,
    };
    // Nav toggle
    this.navtoggleClass = this.navtoggleClass.bind(this);
  }
  // Nav toggle
  navtoggleClass() {
    this.setState({
      navtoggle: !this.state.navtoggle,
    });
  }
  // Sticky header
  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 100,
        });
      },
      false
    );
  }
  render() {
    return <Fragment />;
  }
}

export default HeaderComponent;
