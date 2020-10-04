import React, { Component } from "react";

import classes from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.inner}>
          <div>
            <b>
              Designed and Built with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by Hugh Bromund, Nathan Ashta, Peyton Williams, and Aditya Naik.
            </b>
          </div>
          <div>
            <b>Project Created for VandyHacks VII - Hosted on Google Cloud</b>
          </div>
          <div>
            <b>Frontend Version:</b> {process.env.REACT_APP_VERSION}
          </div>
        </div>
      </div>
    );
  }
}
