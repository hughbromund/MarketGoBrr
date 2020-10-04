import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import PairingCard from "./PairingCard";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./PairingCard.module.css";

var BASE = "https://api.marketgobrr.com";
if (process.env.NODE_ENV === "development") {
  BASE = "http://localhost:5000";
}

// GET /api/topRVal
export default class TopPairings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topVals: "",
    };
  }

  componentDidMount = async () => {
    var response = await fetch(BASE + "/api/topRVal", {
      method: "GET",
    });
    var body = await response.json();
    // console.log(body);
    this.setState({ topVals: body });
  };

  render() {
    var output = [];
    if (this.state.topVals !== "" && this.state.topVals !== undefined) {
      for (var i = 0; i < this.state.topVals.length; i++) {
        // console.log(this.state.topVals[i]);
        output.push(
          <Fade
            key={
              this.state.topVals[i].twit_acc + "-" + this.state.topVals[i].r_val
            }
            bottom
          >
            <PairingCard
              username={this.state.topVals[i].twit_acc}
              stock={this.state.topVals[i].stock_symbol}
              r_value={this.state.topVals[i].r_val}
            />
          </Fade>
        );
      }
    }

    return (
      <div>
        <Container>
          <Fade bottom>
            <h1>
              <b>Top Pairings</b>
            </h1>
          </Fade>
          <Fade bottom>
            <p>
              See the top correlations between Twitter Users and Stocks. Think
              you know a pairing that's better? Run your Twitter User and Stock
              through the system and it'll show up here if you're correct!
            </p>
            <br />
          </Fade>
          <Fade bottom>
            <Card className={classes.HeaderCard}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>
                      <b>Username</b>
                    </Card.Title>
                  </Col>
                  <Col>
                    <Card.Title>
                      <b>Stock</b>
                    </Card.Title>
                  </Col>
                  <Col>
                    <Card.Title>
                      <b>Correlation Label</b>
                    </Card.Title>
                  </Col>
                  <Col>
                    <Card.Title>
                      <b>Correlation Percent</b>
                    </Card.Title>
                  </Col>
                  <Col sm={1}>
                    <Card.Title>
                      <b>More</b>
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Fade>
          {output}
        </Container>
      </div>
    );
  }
}
