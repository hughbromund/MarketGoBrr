import React, { Component } from "react";
import StockchartInterface from "../Stockchart/StockchartInterface";

import { Link, Element } from "react-scroll";
import {
  Container,
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { Timeline, Tweet } from "react-twitter-widgets";
import Fade from "react-reveal/Fade";
import TextLoop from "react-text-loop";

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
      status: 0,
      topEmotionalTweets: [],
      dataStatus: true,
    };

    this.interval = setInterval(() => {
      const change = 0.9;
      if (this.state.status + change <= 100) {
        this.setState({ status: this.state.status + change });
      }
    }, 100);
  }
  async getData() {
    console.log("here");
    var response = await fetch(
      BASE + "/api/" + this.getUsername() + "/" + this.getStockTicker(),
      {
        method: "GET",
      }
    );
    var body = await response.json();
    if (response.status === 400) {
      this.setState({ dataStatus: false });
      return;
    }
    this.setState({ data: body });
    console.log(body);
    console.log(Math.abs(this.state.data.r_value).toString());
    this.setState({ topEmotionalTweets: this.getTopEmotionalTweets() });
    console.log(this.state.topEmotionalTweets);
    console.log(
      this.state.data.tweet_list[this.state.topEmotionalTweets[0]].id
    );
  }
  async componentDidMount() {
    await this.getData();
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
      out += this.determinePositiveOrNegative(this.state.data.r_value * 100);
    } else if (percent >= 20) {
      out += "a medium ";
      out += this.determinePositiveOrNegative(this.state.data.r_value * 100);
    } else if (percent >= 10) {
      out += "a low ";
      out += this.determinePositiveOrNegative(this.state.data.r_value * 100);
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
  getTopEmotionalTweets = () => {
    var max = [0, 0, 0];
    var i = 0;
    for (i = 0; i < this.state.data.tweet_list.length; i++) {
      if (this.state.data.tweet_list[i].magnitude >= max[0]) {
        max[0] = i;
      }
    }
    for (i = 0; i < this.state.data.tweet_list.length; i++) {
      if (i === max[0]) {
        continue;
      }
      if (this.state.data.tweet_list[i].magnitude >= max[1]) {
        max[1] = i;
      }
    }
    for (i = 0; i < this.state.data.tweet_list.length; i++) {
      if (i === max[0] || i === max[1]) {
        continue;
      }
      if (this.state.data.tweet_list[i].magnitude >= max[2]) {
        max[2] = i;
      }
    }
    return max;
  };

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    if (this.state.dataStatus === false) {
      return (
        <Container>
          <Row>
            <Col>
              <h1>Not enough tweets for the given user!</h1>
              <Button href="/" variant="success" size="lg">
                Go back and try a different user!
              </Button>
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.data === "") {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <div className={classes.center}>
                  <h2>
                    <TextLoop
                      children={this.shuffle([
                        "Using linear regression",
                        "Utilizing mathematical models",
                        "Running through Google Cloud",
                        "Performing data analysis",
                        "Running machine learning algorithms",
                        "Analyzing Twitter data",
                        "Tracking market changes over time",
                        "Analyzing sentiments",
                        "Powering up the servers",
                        "Acquiring a taste for Free-Form Jazz",
                        "Petting the squirrel from VandyHacks",
                      ])}
                    />
                  </h2>
                </div>
                <br />
                <ProgressBar now={this.state.status} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    clearInterval(this.interval);
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
                        <h2>
                          <b>@{this.getUsername()}'s</b> tweets have{" "}
                          <b>
                            {this.determineCorrelation()} (
                            {Math.round(
                              Math.abs(this.state.data.r_value * 100)
                            )}
                            %) correlation{" "}
                          </b>{" "}
                          with <b>{this.getStockTicker()}</b>
                        </h2>
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <h3>
                          Graph of <b>{this.getStockTicker()}</b> over the last
                          month.
                        </h3>
                        <StockchartInterface
                          rawData={this.state.data.stock_data}
                          tooltips={this.state.data.highest_change_tweets}
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
                <Col>
                  <Fade bottom delay={1000}>
                    <h2>Top Influential Tweets</h2>
                  </Fade>
                  <Fade bottom delay={1000}>
                    <p>
                      Based on our machine learning algorithm, sentiment
                      analysis, natural language processing, linear regression,
                      data analysis, and mathematical models, we have determined
                      that these tweets have been the{" "}
                      <b>most influential tweets</b> on {this.getStockTicker()}.
                    </p>
                  </Fade>
                  <Row>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId={this.state.data.highest_change_tweets[0].id}
                        />
                        <p className={classes.center}>
                          Absolute change on {this.getStockTicker()}:{" "}
                          <b>
                            {Math.round(
                              this.state.data.highest_change_tweets[0].change *
                                100
                            )}
                            %
                          </b>
                        </p>
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId={this.state.data.highest_change_tweets[1].id}
                        />
                        <p className={classes.center}>
                          Absolute change on {this.getStockTicker()}:{" "}
                          <b>
                            {Math.round(
                              this.state.data.highest_change_tweets[1].change *
                                100
                            )}
                            %
                          </b>
                        </p>
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId={this.state.data.highest_change_tweets[2].id}
                        />
                        <p className={classes.center}>
                          Absolute change on {this.getStockTicker()}:{" "}
                          <b>
                            {Math.round(
                              this.state.data.highest_change_tweets[2].change *
                                100
                            )}
                            %
                          </b>
                        </p>
                      </Fade>
                    </Col>
                  </Row>
                  <Fade bottom delay={1000}>
                    <h2>Top Emotional Tweets</h2>
                  </Fade>
                  <Fade bottom delay={1000}>
                    <p>
                      Based on our machine learning algorithm, sentiment
                      analysis, natural language processing, linear regression,
                      data analysis, and mathematical models, we have determined
                      that these tweets have been <b>most emotional tweets</b>
                    </p>
                  </Fade>
                  <Row>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId={
                            this.state.data.tweet_list[
                              this.getTopEmotionalTweets()[0]
                            ].id
                          }
                        />
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId={
                            this.state.data.tweet_list[
                              this.getTopEmotionalTweets()[1]
                            ].id
                          }
                        />
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom delay={1000}>
                        <Tweet
                          tweetId={
                            this.state.data.tweet_list[
                              this.getTopEmotionalTweets()[2]
                            ].id
                          }
                        />
                      </Fade>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <Fade bottom>
                    <h2>Twitter Feed</h2>
                  </Fade>
                  <Fade bottom>
                    <Timeline
                      dataSource={{
                        sourceType: "profile",
                        screenName: this.getUsername(),
                      }}
                      options={{
                        height: "1600",
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
