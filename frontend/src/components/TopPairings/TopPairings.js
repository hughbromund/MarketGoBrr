import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import PairingCard from "./PairingCard";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./PairingCard.module.css";

export default class TopPairings extends Component {
  render() {
    return (
      <div>
        <Container>
          <Fade bottom>
            <h1>
              <b>Top Pairings</b>
            </h1>
          </Fade>
          <Fade bottom>
            <p>See the top correlations between Twitter Users and Stocks</p>
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
          <Fade bottom>
            <PairingCard username="HughBromund" stock="SPY" r_value={0.1} />
          </Fade>
          <Fade bottom>
            <PairingCard username="HughBromund" stock="SPY" r_value={0.1} />
          </Fade>
          <Fade bottom>
            <PairingCard username="HughBromund" stock="SPY" r_value={0.1} />
          </Fade>
          <Fade bottom>
            <PairingCard username="HughBromund" stock="SPY" r_value={0.1} />
          </Fade>
          <Fade bottom>
            <PairingCard username="HughBromund" stock="SPY" r_value={0.1} />
          </Fade>
          <Fade bottom>
            <PairingCard username="HughBromund" stock="SPY" r_value={0.1} />
          </Fade>
        </Container>
      </div>
    );
  }
}
