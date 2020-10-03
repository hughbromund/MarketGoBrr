import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import classes from "./Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1 className={classes.center}>Market Go Brr</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.center}>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </div>
          </Col>
          <Col>
            <div className={classes.center}>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className={classes.center}>
              <Button href="analysis" variant="success" size="lg">
                Go!
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
