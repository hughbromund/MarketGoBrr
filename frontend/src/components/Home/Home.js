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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import TwitterCard from "../TwitterCard/TwitterCard";
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

  render() {
    console.log(this.state);
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.center}>Market Go Brr</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
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
            <InputGroup>
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
            <div className={classes.center}>
              <b>Popular Stocks</b>
            </div>
            <div className={classes.center}>
              <ButtonGroup>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
              </ButtonGroup>
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
