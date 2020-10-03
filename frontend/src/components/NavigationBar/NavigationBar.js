import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className={classes.NavigationBar}>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ color: "inherit", "text-decoration": "none" }}
            >
              <img
                alt=""
                src={require("../../assets/MarketGoBrrLogo.png")}
                height="40"
                width="40"
              />{" "}
              <b>Market Go Brr</b>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  to="/about"
                  style={{ color: "inherit", "text-decoration": "none" }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/analysis"
                  style={{ color: "inherit", "text-decoration": "none" }}
                >
                  Analysis
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hughbromund/MarketGoBrr"
          >
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </Navbar>
      </div>
    );
  }
}
