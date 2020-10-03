import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import classes from "./TwitterCard.module.css";

export default class TwitterCard extends Component {
  render() {
    return (
      <Card className={classes.TwitterCard}>
        <Card.Body>
          <Card.Title>
            <b>{this.props.name}</b>
          </Card.Title>
          <Card.Subtitle>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://twitter.com/" + this.props.handle}
            >
              @{this.props.handle}
            </a>
          </Card.Subtitle>
          <hr />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
