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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterUsername: "",
      stockTicker: "",
    };
  }

  setTwitterUsername = (newUsername) => {
    this.setState({ twitterUsername: newUsername });
  };

  setStockTicker = (newTicker) => {
    this.setState({ stockTicker: newTicker });
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.center}>
              <b>Market Go Brr</b>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div>
              <h3>Popular Twitter Users</h3>
            </div>
            <div>
              <br />
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
              </CardDeck>
              <br />
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
              </CardDeck>
            </div>
          </Col>
          <Col>
            <div>
              <h3>Popular Stocks</h3>
            </div>
            <br />
            <div>
              <CardDeck>
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
              <br />
              <CardDeck>
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
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.center}>
              <Button variant="success" size="lg">
                <Link
                  to="/analysis"
                  style={{ color: "inherit", "text-decoration": "none" }}
                >
                  Go!
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
