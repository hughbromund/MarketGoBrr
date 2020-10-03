import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import classes from "./About.module.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>
                <b>About Market Go Brr</b>
              </h1>
              <br />
              <CardDeck>
                <Card className={classes.AboutCard}>
                  <Card.Body>
                    <Card.Title>
                      <b>Idea</b>
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      The idea for this project was formed after seeing the
                      impact that Donald Trump contracting COVID-19 had on the
                      Stock Market. We were curious if this effect could be
                      quantified and if any other Twitter users created a
                      similar effect.
                    </Card.Text>
                    <Card.Text>
                      This project was built for VandyHacks VII.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className={classes.AboutCard}>
                  <Card.Body>
                    <Card.Title>
                      <b>Technologies</b>
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      <ul>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>Google Cloud NLP</li>
                        <li>Google Cloud App Engine</li>
                        <li>Google Cloud Functions</li>
                        <li>Twitter API</li>
                        <li>Finnhub API</li>
                        <li>ExpressJS</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
              <br />
              <Card className={classes.AboutCard}>
                <Card.Body>
                  <Card.Title>
                    <b>Team</b>
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    Frontend Team:
                    <ul>
                      <li>Nathan Ashta</li>
                      <li>Hugh Bromund</li>
                    </ul>
                    Backend Team:
                    <ul>
                      <li>Aditya Naik</li>
                      <li>Peyton Williams</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
