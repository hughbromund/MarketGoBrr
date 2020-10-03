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
  render() {
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
                placeholder="Twitter Username"
                aria-label="Twitter Username"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Stock Ticker"
                aria-label="Stock Ticker"
              />
            </InputGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div className={classes.center}>
              <b>Popular Twitter Users</b>
            </div>
            <div className={classes.center}>
              <br />
              <CardDeck>
                <TwitterCard
                  name="Hugh Bromund"
                  handle="hughbromund"
                  description="TEST"
                />
                <TwitterCard
                  name="Donald J. Trump"
                  handle="realDonaldTrump"
                  description="TEST"
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
