import React, { Component } from "react";
import StockchartInterface from "../Stockchart/StockchartInterface";

import { Link, Element, scroller } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
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
                  We have determined that his user's tweets have a 50% effect on
                  SPY.
                </h1>
                <StockchartInterface></StockchartInterface>
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
            <Container fluid>
              <Row>
                <Col>Test1</Col>
              </Row>
            </Container>
          </Element>
        </div>
      </div>
    );
  }
}
