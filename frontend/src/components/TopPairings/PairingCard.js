import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import classes from "./PairingCard.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class PairingCard extends Component {
  determinePositiveOrNegative = (num) => {
    if (num >= 0) {
      return "Positive";
    } else {
      return "Negative";
    }
  };

  determineCorrelation = () => {
    var out = "";
    var percent = Math.abs(this.props.r_value * 100);
    var otherPercent = this.props.r_value * 100;
    if (percent >= 30) {
      out += "Strong ";
      out += this.determinePositiveOrNegative(otherPercent);
    } else if (percent >= 20) {
      out += "Medium ";
      out += this.determinePositiveOrNegative(otherPercent);
    } else if (percent >= 10) {
      out += "Low ";
      out += this.determinePositiveOrNegative(otherPercent);
    } else {
      out += "No";
    }
    return out;
  };

  render() {
    return (
      <Card className={classes.PairingCard}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://twitter.com/" + this.props.username}
                >
                  @{this.props.username}
                </a>
              </Card.Title>
            </Col>
            <Col>
              <Card.Title>{this.props.stock.toUpperCase()}</Card.Title>
            </Col>
            <Col>
              <Card.Title>{this.determineCorrelation()}</Card.Title>
            </Col>
            <Col>
              <Card.Title>
                {(this.props.r_value * 100).toPrecision(5)}%
              </Card.Title>
            </Col>
            <Col sm={1}>
              <Link
                as={Button}
                to={`/analysis/${this.props.username}/${this.props.stock}`}
                style={{ color: "inherit", "text-decoration": "none" }}
              >
                <Button>
                  <i class="fas fa-arrow-alt-circle-right"></i>
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
