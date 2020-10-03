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
import Fade from "react-reveal/Fade";

import classes from "./Analysis.module.css";

var BASE = "https://api.marketgobrr.com";
if (process.env.NODE_ENV === "development") {
  BASE = "http://localhost:5000";
}

export default class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  async getData() {
    console.log("here");
    var response = await fetch(
      BASE + "/api/" + this.getUsername() + "/" + this.getStockTicker(),
      {
        method: "GET",
        credentials: "include",
        withCredentials: true,
      }
    );
    var body = await response.json();
    this.setState({ data: body });
    console.log(body);
    console.log(Math.abs(this.state.data.r_value).toString());
  }
  componentDidMount() {
    this.getData();
  }

  determinePositiveOrNegative = (num) => {
    if (num >= 0) {
      return "positive";
    } else {
      return "negative";
    }
  };

  determineCorrelation = () => {
    var out = "";
    var percent = Math.abs(this.state.data.r_value * 100);
    if (percent >= 30) {
      out += "a strong ";
      out += this.determinePositiveOrNegative();
    } else if (percent >= 20) {
      out += "a medium ";
      out += this.determinePositiveOrNegative();
    } else if (out >= 10) {
      out += "a low ";
      out += this.determinePositiveOrNegative();
    } else {
      out += "no";
    }
    return out;
  };
  getUsername = () => {
    return this.props.location.pathname.split("/")[2] === "" ||
      this.props.location.pathname.split("/")[2] === undefined
      ? "realDonaldTrump"
      : this.props.location.pathname.split("/")[2];
  };
  getStockTicker = () => {
    return this.props.location.pathname.split("/")[3] === "" ||
      this.props.location.pathname.split("/")[3] === undefined
      ? "AAPL"
      : this.props.location.pathname.split("/")[3];
  };
  render() {
    if (this.state.data === "") {
      return "Loading...";
    }
    return (
      <div>
        <div className={classes.firstContainer}>
          <Container fluid>
            <Row>
              <Col>
                <Fade bottom delay={500}>
                  <Card className={classes.StockCard}>
                    <Card.Body>
                      <Card.Title>
                        We have determined that <b>@{this.getUsername()}'s</b>{" "}
                        tweets have{" "}
                        <b>{this.determineCorrelation()} correlation</b> with{" "}
                        <b>{this.getStockTicker()}</b>.
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <StockchartInterface
                          rawData={this.state.data.stock_data}
                        />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Fade>
                <br />
                <Fade bottom delay={500}>
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
                </Fade>
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
                  <Fade bottom>
                    <h2>Top Sentiments:</h2>
                  </Fade>
                  <Row>
                    <Col>
                      <Fade bottom>
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
                      </Fade>
                      <br />
                      <Fade bottom>
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
                      </Fade>
                    </Col>
                  </Row>
                  <br />
                  <Fade bottom delay={1000}>
                    <h2>Top Tweets:</h2>
                  </Fade>

                  <Row>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId="841418541026877441"
                          options={{ width: "200" }}
                        />
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId="841418541026877441"
                          options={{ width: "200" }}
                        />
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId="841418541026877441"
                          options={{ width: "200" }}
                        />
                      </Fade>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <Fade bottom>
                    <h1>Twitter Feed</h1>
                  </Fade>
                  <Fade bottom>
                    <Timeline
                      dataSource={{
                        sourceType: "profile",
                        screenName: this.getUsername(),
                      }}
                      options={{
                        height: "800",
                      }}
                    />
                  </Fade>
                </Col>
              </Row>
            </Container>
          </Element>
        </div>
      </div>
    );
  }
}
