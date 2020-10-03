import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import classes from "./AnalysisCard.module.css";

export default class AnalysisCard extends Component {
  render() {
    return (
      <Card className={classes.AnalysisCard}>
        <Card.Body>
          <Card.Title>
            <b>{this.props.name}</b>
          </Card.Title>
          <hr />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
