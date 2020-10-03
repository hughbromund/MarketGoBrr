import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>About this project</h1>
              <p>
                This project uses Google Cloud NLP, Twitter API, and Finnhub API
                to parse someone's tweet history and their effect on a given
                stock ticker.
              </p>
              <h2>Features</h2>
              <ul>
                <li>Sentiment analysis based on a given stock</li>
                <li>Trend over time with overlay of a given tweet</li>
                <li>Ability to find the most impactful tweets</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
