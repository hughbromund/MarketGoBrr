import React, { Component } from "react";

import classes from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.inner}>
          <div>
            Designed and Built with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by Hugh Bromund, Nathan Ashta, Peyton Williams, and Aditya Naik.
          </div>
          <div>Project Created for VandyHacks VII - Hosted on Google Cloud</div>
          <div>Frontend Version: {process.env.REACT_APP_VERSION}</div>
        </div>
      </div>
    );
  }
}
