import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import TwitterCard from "../TwitterCard/TwitterCard";
import StockCard from "../StockCard/StockCard";
import CardDeck from "react-bootstrap/CardDeck";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

// making a slight change
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterUsername: "",
      stockTicker: "",
      brr: "brr",
    };
    // this.interval = setInterval(
    //   () => this.setState({ brr: this.state.brr + "r" }),
    //   250
    // );
  }

  setTwitterUsername = (newUsername) => {
    this.setState({ twitterUsername: newUsername });
  };

  setStockTicker = (newTicker) => {
    this.setState({ stockTicker: newTicker });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className={classes.center}>
            <Fade top>
              <Image
                alt=""
                src={require("../../assets/MarketGoBrrLogo.png")}
                className={classes.logo}
              />
            </Fade>
            <Fade top>
              <h1 className={classes.center}>
                <b>Market Go Brr</b>
              </h1>
            </Fade>
            <Fade top>
              <p className={classes.center}>
                Market Go Brr lets you enter a Twitter handle and see how that
                user's tweets impact a stock of your choice.
              </p>
            </Fade>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Fade bottom>
              <InputGroup className={classes.inputGroup}>
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={this.state.twitterUsername}
                  onChange={(e) => {
                    this.setState({ twitterUsername: e.target.value });
                  }}
                  placeholder="Twitter Username"
                  aria-label="Twitter Username"
                />
              </InputGroup>
            </Fade>
          </Col>
          <Col>
            <Fade bottom>
              <InputGroup className={classes.inputGroup}>
                <FormControl
                  value={this.state.stockTicker}
                  onChange={(e) => {
                    this.setState({ stockTicker: e.target.value });
                  }}
                  placeholder="Stock Ticker"
                  aria-label="Stock Ticker"
                />
              </InputGroup>
            </Fade>
          </Col>
        </Row>
        <Collapse
          in={
            this.state.stockTicker !== "" && this.state.twitterUsername !== ""
          }
        >
          <div className={classes.center}>
            <br />
            <Card border="success" className={classes.resultsCard}>
              <Card.Body>
                <Card.Title>
                  Lets see how brr <b>{this.state.stockTicker}</b> goes when{" "}
                  <b>@{this.state.twitterUsername}</b> Tweets
                </Card.Title>
                <Card.Text></Card.Text>
                <Link
                  as={Button}
                  to={`/analysis/${this.state.twitterUsername}/${this.state.stockTicker}`}
                  style={{ color: "inherit", "text-decoration": "none" }}
                >
                  <Button variant="success" size="lg">
                    Go!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
        <br />

        <Row>
          <Col>
            <div>
              <Fade bottom>
                <h3>Popular Twitter Users</h3>
              </Fade>
            </div>
          </Col>
          <Col>
            <div>
              <Fade bottom>
                <h3>Popular Stocks</h3>
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Fade bottom>
            <CardDeck>
              <TwitterCard
                name="Elon Musk"
                handle="elonmusk"
                description="Elon Musk is the CEO of Tesla and SpaceX. His twitter often impacts the stock price of his companies dramatically."
                setTwitterUsername={this.setTwitterUsername}
              />

              <TwitterCard
                name="Donald J. Trump"
                handle="realDonaldTrump"
                description="Donald John Trump is the 45th and current president of the United States. His Twitter account is one of the most popular in the world. His tweets have the power to move the market."
                setTwitterUsername={this.setTwitterUsername}
              />
              <StockCard
                name="Apple Inc."
                ticker="AAPL"
                link="https://www.google.com/finance/quote/AAPL:NASDAQ"
                description="Apple Inc is the largest company by Market Capitalization on the planet. They are worth over $2 Trillion."
                setStockTicker={this.setStockTicker}
              />
              <StockCard
                name="SPDR S&P 500 ETF Trust"
                ticker="SPY"
                link="https://www.google.com/finance/quote/SPY:NYSEARCA"
                description="SPY is an aggregate of the S&P 500 largest companies. It is a good measure for the market as a whole."
                setStockTicker={this.setStockTicker}
              />
            </CardDeck>
          </Fade>
          <div>
            <br />
          </div>
          <Fade bottom>
            <CardDeck>
              <TwitterCard
                name="Kanye West"
                handle="kanyewest"
                description="Kanye West is an American rapper, record producer, and fashion designer. His twitter is one of the most popular on the platform and may influence the market."
                setTwitterUsername={this.setTwitterUsername}
              />
              <TwitterCard
                name="Barack Obama"
                handle="BarackObama"
                description="Barack Obama is the 44th president of the United States. Although no longer in office, he has the most followers on Twitter and regularly tweets."
                setTwitterUsername={this.setTwitterUsername}
              />
              <StockCard
                name="Tesla Inc"
                ticker="TSLA"
                link="https://www.google.com/finance/quote/TSLA:NASDAQ"
                description="Tesla Inc is the fastest growing car company. They are lead by Elon Musk. His Twitter account often impacts their price dramatically."
                setStockTicker={this.setStockTicker}
              />
              <StockCard
                name="Exxon Mobil Corporation"
                ticker="XOM"
                link="https://www.google.com/finance/quote/XOM:NYSE"
                description="The Exxon Mobil Corporation is the largest Oil and Natural Gas company in the United States. Their stock price is often more stable than other tech stocks."
                setStockTicker={this.setStockTicker}
              />
            </CardDeck>
          </Fade>
        </Row>
      </Container>
    );
  }
}
