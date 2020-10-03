import React, { Component } from "react";
import StockchartInterface from "../Stockchart/StockchartInterface";

import { Link, Element, scroller } from "react-scroll";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import { Timeline, Tweet } from "react-twitter-widgets";
import AnalysisCard from "../AnalysisCard/AnalysisCard";

import classes from "./Analysis.module.css";

export default class Analysis extends Component {
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  render() {
    return (
      <div>
        <div className={classes.firstContainer}>
          <Container fluid>
            <Row>
              <Col>
                <h1>
                  We have determined that this user's tweets have a 50% effect
                  on SPY.
                </h1>
                <StockchartInterface></StockchartInterface>
                <br />
                <div className={classes.center}>
                  <label>More info:</label>
                </div>
                <div className={classes.center}>
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
                  <h2>Top Sentiments</h2>
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
