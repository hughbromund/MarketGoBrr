import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import classes from "./StockCard.module.css";

export default class StockCard extends Component {
  render() {
    return (
      <Card
        className={classes.StockCard}
        onClick={(e) => {
          this.props.setStockTicker(this.props.ticker);
        }}
      >
        <Card.Body>
          <Card.Title>
            <b>{this.props.name}</b>
          </Card.Title>
          <Card.Subtitle>
            <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
              {this.props.ticker}
            </a>
          </Card.Subtitle>
          <hr />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
