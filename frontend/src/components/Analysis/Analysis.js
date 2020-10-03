import React, { Component } from "react";
import StockchartInterface from "../Stockchart/StockchartInterface";

import { Link, Element } from "react-scroll";
import {
  Container,
  Row,
  Col,
  CardDeck,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Timeline, Tweet } from "react-twitter-widgets";
import AnalysisCard from "../AnalysisCard/AnalysisCard";

import classes from "./Analysis.module.css";

export default class Analysis extends Component {
  getUsername = () => {
    return this.props.location.pathname.split("/")[2];
  };
  getStockTicker = () => {
    return this.props.location.pathname.split("/")[3];
  };
  render() {
    return (
      <div>
        <div className={classes.firstContainer}>
          <Container fluid>
            <Row>
              <Col>
                <Card className={classes.StockCard}>
                  <Card.Body>
                    <Card.Title>
                      We have determined that <b>@{this.getUsername()}'s</b>{" "}
                      tweets have a 50% effect on <b>{this.getStockTicker()}</b>
                      .
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      <StockchartInterface />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <div className={classes.center}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip">More info.</Tooltip>}
                  >
                    <div className={classes.tooltip}>
                      <Link
                        activeClass="active"
                        className="test1"
                        to="test1"
                        spy={true}
                        smooth={true}
                        duration={1000}
                      >
                        <i
                          class="fa fa-arrow-circle-down fa-5x"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                  </OverlayTrigger>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={classes.firstContainer}>
          <Element name="test1" className="element">
            <hr />
            <br />
            <Container fluid>
              <Row>
                <Col sm={8}>
                  <h2>Top Sentiments:</h2>
                  <Row>
                    <Col>
                      <CardDeck>
                        <AnalysisCard
                          name="Angry Sentiment"
                          description="This user has a 33% angry sentiment, which has a high effect of the market."
                        />
                        <AnalysisCard
                          name="Sad Sentiment"
                          description="This user has a 8% angry sentiment, which has a high effect of the market."
                        />
                      </CardDeck>
                      <br />
                      <CardDeck>
                        <AnalysisCard
                          name="Happy Sentiment"
                          description="This user has a 50% angry sentiment, which has a high effect of the market."
                        />
                        <AnalysisCard
                          name="Annoyed Sentiment"
                          description="This user has a 10% angry sentiment, which has a high effect of the market."
                        />
                      </CardDeck>
                    </Col>
                  </Row>
                  <br />

                  <h2>Top Tweets:</h2>

                  <Row>
                    <Col>
                      <Tweet
                        tweetId="841418541026877441"
                        options={{ width: "200" }}
                      />
                    </Col>
                    <Col>
                      <Tweet
                        tweetId="841418541026877441"
                        options={{ width: "200" }}
                      />
                    </Col>
                    <Col>
                      <Tweet
                        tweetId="841418541026877441"
                        options={{ width: "200" }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <h1>Twitter Feed</h1>
                  <Timeline
                    dataSource={{
                      sourceType: "profile",
                      screenName: "TwitterDev",
                    }}
                    options={{
                      height: "800",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </Element>
        </div>
      </div>
    );
  }
}
