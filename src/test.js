import React from "react";
import {useState, useEffect} from "react";
import Downbar from "./component/layout/Downbar/Downbar";
import Header from "./component/layout/Header/Header.js";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
          <Header />
        ) : (
          <Header />
        )}
      </div>
    );
  }
}

export default Test;